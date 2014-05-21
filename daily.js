var sender = require('./momentMessages');
var userService = require('./userService');

var variant2Number = '+14154634615';
var variant3Number = '+14157428555';

module.exports = function() {
	userService.getAllValidNumbers('variant2').then( function(result) {
        var user;

        console.log(result.length +" users found");

		userService.resetAllUserPrompts('variant2').then(function() {
			console.log("Commit variables set to no");
            var i;

			for (i=0; i<result.length; i++) {
                user = result[i];

                console.log("Reading valid number\n"+"Number: "+ user.number + "Savings: "+ user.savedToday+"\n");
                if (user) {
                    if (user.state == '0' || user.savedToday =='0') {
                        sender.firstTimeUseV2(user.number, variant2Number);
                        console.log("FTU sent");
                    }
                    else {
                        sender.dailyReminder(user.number, variant2Number, user.savedToday);
                        console.log("daily reminder sent");
                    }

                    user.savedToday = 0;
                    user.commitAmount = 0;
                    user.state = '1';
                    userService.saveUser(user, 'variant2');
			}
			console.log("Daily reminder send and savings set to 0");
		}

		});
    },

	function(error) {
		console.log(error);
	});

    userService.getAllValidNumbers('variant3').then( function(result) {
        var user;

        console.log(result.length +" users found");

        userService.resetAllUserPrompts('variant3').then(function() {
            console.log("Commit variables set to no");
            var i;

            for (i=0; i<result.length; i++) {
                user = result[i];

                console.log("Reading valid number\n"+"Number: "+ user.number + "Savings: "+ user.savedToday+"\n");
                if (user) {
                    user.savedToday = 0;

                    if (user.ftuSent == "No" || user.savedToday =='0') {
                        sender.firstTimeUseV3(user.number, variant3Number);
                        user.ftuSent = 'Yes';
                        console.log("FTU sent");
                    }
                    else {
                        sender.dailyReminderV3(user.number,variant3Number,user.savedToday);
                        console.log("daily reminder sent");
                    }
                    userService.saveUser(user, 'variant3');
                }
                console.log("Daily reminder send and savings set to 0");
            }

        });
    });
};

