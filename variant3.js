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
        UserService.createUser(number, variant);
        res.send('');
    },

    recieveMessage: function(req, res) {
        console.log("receiving message, req: ");
        //console.log(req);

        var phoneNumber = req.body.From;
        var message = req.body.Body;

        var saveAmount = parseFloat((message).replace("$",""));

        console.log("Message received");
        console.log(message);
        console.log("save amount= "+saveAmount);

        UserService.hasReceivedFTU(phoneNumber).then(function(ftuSent) {
            if (ftuSent=="No") {
                console.log("User responded before FTU sent, NOW PANIC AND FREAK OUT");
                sender.setUpResponse(phoneNumber, twilioNumber);
            }
            else {
                // If we successfully got a number from the user
                UserService.hasRespondedToMostRecentPrompt(phoneNumber).then(
                    function(result){
                        if (isNaN(saveAmount)) { // If we cannot parse the message to get a number
                            if (result =="No") {
                                //has not commited
                                console.log("sending commit error");
                                sender.commitError(phoneNumber, twilioNumber);
                            }
                            else {
                                //has commited
                                console.log("sending savings error");
                                sender.savingsError(phoneNumber, twilioNumber);
                            }
                            console.log("user did not send number");
                        }
                        else {
                            console.log("user sent number "+phoneNumber+", will try to respond");

                            if (result == 'No') {
                                console.log("User has not commited, sending commit confirmation");
                                UserService.setRespondedToMostRecentPrompt(phoneNumber).then(
                                    function() {
                                        UserService.setCommitAmountForUserToday(phoneNumber, ''+saveAmount).then(
                                            function() {
                                                sender.confirmation(phoneNumber, twilioNumber, saveAmount);
                                            }
                                        );
                                    }
                                );
                            } else {
                                console.log("User already committed, incrementing saved amount");
                                UserService.getSavedAmountForUserToday(phoneNumber).then(
                                    function(amount){
                                        console.log("Amount from db: "+amount);
                                        var floatAmount = parseFloat(amount);
                                        var totalAmount = saveAmount + floatAmount;
                                        var totalSavingsString = '' + totalAmount;

                                        UserService.getCommitAmountForUserToday(phoneNumber).then(function(commitAmount) {
                                            if (parseFloat(commitAmount)>totalAmount) {
                                                sender.confirmSavings(phoneNumber, twilioNumber, ''+(commitAmount-totalAmount),commitAmount);
                                            }
                                            else {
                                                sender.confirmSavingsGoalReached(phoneNumber, twilioNumber, totalSavingsString,commitAmount)
                                            }

                                            // Send message to user of their total savings so far today

                                            UserService.setSavedAmountForUserToday(phoneNumber, totalSavingsString).then(function() {
                                                console.log("amount user has saved today: " + totalSavingsString);

                                                UserService.getTotalSavedAmountForUser(phoneNumber).then(
                                                    function(amount){
                                                        var floatAmount = parseFloat(amount);
                                                        var totalAmount = saveAmount + floatAmount;
                                                        var totalSavingsString = '' + totalAmount;

                                                        UserService.setTotalSavedAmountForUser(phoneNumber, totalSavingsString).then(function() {
                                                            console.log("amount user has  saved total: " + totalSavingsString);

                                                        });

                                                    });
                                            });
                                        });
                                    });
                            }
                        }
                    },
                    function(err) {
                        console.log(err);
                    });

            }
        });
        res.send('');
    }
};