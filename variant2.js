// This test variant is the daily savings moment 

var UserService = require('./userService');
var Database = require('./databaseCommunications');
var Q = require('q');
var sender = require('./momentMessages');

// This number is linked to the URL http://ec2-54-204-109-189.compute-1.amazonaws.com/messages/receive/variant2
var twilioNumber = '+14154634615';
var variant = 'variant2';

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
        var variant = 'variant2';
        var saveAmount = parseFloat((message).replace("$",""));

        console.log("Message received");
        console.log(message);
        console.log("save amount= "+saveAmount);
        UserService.getUser(phoneNumber,variant).then(function(user) {
            
            switch(user.state) {
                //state 0 ftu not sent
                //state 1 Daily sent, no response
                //state 2 Daily sent, reponse received, evening not sent yet
                //state 3 Daily sent, response received, evening sent, no response
                //state 4 Daily sent, response received, evening sent, response received
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
                    sender.confirmationV2(phoneNumber,twilioNumber,''+user.commitAmount);
                }
                break;
                case '2':
                console.log("Evening not sent yet, sending excited message");
                sender.commitedResponseV2(phoneNumber,twilioNumber);
                break;
                case '3':
                if (message=='y' || message=='Y') {
                    console.log("User Responded with y");
                    sender.endOfDayV2YesResponse(phoneNumber,twilioNumber,user.savedToday,''+(parseFloat(user.savedToday)*365));
                    user.state='4';
                    user.totalPutAside=''+(parseFloat(user.totalPutAside)+parseFloat(user.savedToday));
                }
                else if (message=='n' || message=='N'){
                    console.log("User repsonded with n");
                    sender.endOfDayV2NoResponse(phoneNumber,twilioNumber);
                    user.state='4';
                }
                else {
                    console.log("Couldn't parse y/n from reponse");
                    sender.endOfDayV2Error(phoneNumber,twilioNumber);
                }
                break;
                case '4':
                console.log("Daily not sent, sending excited message");
                sender.setUpResponse(phoneNumber,twilioNumber);
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