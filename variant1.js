// This test variant is the daily savings moment 

var UserService = require('./userService');
var Database = require('./databaseCommunications');
var Q = require('q');
var sender = require('./momentMessages');

// This number is linked to the URL http://ec2-54-204-109-189.compute-1.amazonaws.com/messages/receive/variant1
var twilioNumber = '+14156826769';
var variant = 'variant1';

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
        var variant = 'variant1';
        var saveAmount = parseFloat((message).replace("$",""));

        console.log("Message received");
        console.log(message);
        console.log("save amount= "+saveAmount);
        UserService.getUser(phoneNumber,variant).then(function(user) {
            
            switch(user.state) {
                //state 0 ftu not sent
                //state 1 Daily sent, no response
                //state 2 Daily sent, commit received.
                //state 3 Daily sent, commit received, has reached commit amt.
                case '0':
                console.log("FTU not sent, sending excited message");
                sender.setUpResponse(phoneNumber,twilioNumber);
                break;

                case '1':
                console.log("state 1");
                if (isNaN(saveAmount)) {
                    console.log("NaN received");
                    sender.commitError(phoneNumber,twilioNumber);
                }
                else {
                    console.log("Commit received");
                    user.commitAmount=''+saveAmount;
                    user.savedToday=''+(parseFloat(user.savedToday)+saveAmount);
                    user.state='2';
                    sender.confirmation(phoneNumber,twilioNumber,''+user.commitAmount);
                }
                break;

                case '2':
                case '3':
                console.log("Savings received");
                if (isNaN(saveAmount)) { // If we cannot parse the message to get a number
                    console.log("Cannot parse, sending savings error");
                    sender.savingsError(phoneNumber, twilioNumber);
                    console.log("User did not send number");
                } else {
                    var amount = user.savedToday;
                    console.log("Amount from db: "+amount);

                    var floatAmount = parseFloat(amount);
                    var totalAmount = saveAmount + floatAmount;
                    var totalSavingsStringToday = '' + totalAmount;

                    var commitedAmount = parseFloat(user.commitAmount);
                    // send savings message 
                    if (totalAmount >= commitedAmount) {
                        sender.confirmSavingsReached(phoneNumber, twilioNumber, totalSavingsStringToday, commitAmountString);
                        user.state='3';

                    } else {
                        sender.confirmSavings(phoneNumber, twilioNumber, totalSavingsStringToday, commitAmountString);
                    }
                    // save the total saved today amount to the db 
                    user.savedToday = totalSavingsStringToday;
                    var totalSavedNumber = totalAmount + parseFloat(user.totalSaved);
                    user.totalSaved = '' + totalSavedNumber;

                    UserService.saveUser(user, variant);

                }
                break;
            }
            UserService.saveUser(user,variant);
        },
        function(err) {
            console.log(err);
        });
           
        res.send('');
    }
};