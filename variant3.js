// This test variant is the no goal 

var UserService = require('./userService');
var Database = require('./databaseCommunications');
var Q = require('q');
var sender = require('./momentMessages');

// This phone number is linked to the URL http://ec2-54-204-109-189.compute-1.amazonaws.com/messages/receive/variant3
var twilioNumber = '+14157428555';
var variant = 'variant3';

module.exports = {

    signup: function(req, res) {
        var number = req.params.number;
        UserService.createUser(number, variant).then(
            function(user) {
                sender.setUp(user.number, twilioNumber);    
            });
        res.send('');
    },

    receiveMessage: function(req, res) {
        console.log("receiving message, req: ");
        //console.log(req);

        var phoneNumber = req.body.From;
        var message = req.body.Body;

        var saveAmount = parseFloat((message).replace("$",""));

        console.log("Message received");
        console.log(message);
        console.log("save amount= "+saveAmount);

        UserService.getUser(phoneNumber, variant).then(
        function(user) {
            if (user.ftuSent == "No") {
                console.log("User responded before FTU sent, NOW PANIC AND FREAK OUT");
                sender.setUpResponse(phoneNumber, twilioNumber);
            } else { 
                if (isNaN(saveAmount)) { // If we cannot parse the message to get a number
                    console.log("sending savings error");
                    sender.savingsError(phoneNumber, twilioNumber);
                    console.log("user did not send number");
                } else {
                    var amount = user.savedToday; 
                    console.log("Amount from db: "+amount);

                    var floatAmount = parseFloat(amount);
                    var totalAmount = saveAmount + floatAmount;
                    var totalSavingsStringToday = '' + totalAmount;

                    // send savings message 
                    sender.confirmSavingsV3(phoneNumber, twilioNumber, totalSavingsStringToday);

                    // save the total saved today amount to the db 
                    user.savedToday = totalSavingsStringToday; 
                    var totalSavedNumber = totalAmount + parseFloat(user.totalSaved); 
                    user.totalSaved = '' + totalSavedNumber; 

                    UserService.saveUser(user, variant);

                }
            }, 
        }, 
        function(err) {
            console.log(err);
        });
        
        res.send('');
    }

        
};