var sender = require('./momentMessages');
var userService = require('./userService');

module.exports = function() {
	userService.getAllValidNumbers().then( function(result) {
		var number;
		var savings;
		var ftuSent;

		userService.resetAllUserPrompts().then(function() {
			console.log("Commit variables set to no");

			for (i=0; i<result.length; i++) {
			console.log(i+" users found");
			number=result[i].number;
			savings=result[i].savedToday;
			ftuSent=result[i].ftuSent;
			console.log("Reading valid number\n"+"Number: "+number + "Savings: "+savings+"\n");
			if (number!=undefined) {
				if (ftuSent=="No" || savings=='0') {
					sender.firstTimeUse(number);
					userService.markFTUSent(number);
					console.log("FTU sent");
				}
				else {
				sender.dailyReminder(number,savings);
				console.log("daily reminder sent");
				}
				userService.setSavedAmountForUserToday(number,"0").then(
				function() {
					console.log("user amount set to 0");
					userService.setCommitAmountForUserToday(number,"0");
				});
			}
			console.log("Daily reminder send and savings set to 0");
		}

		});	
		

		

	},
	function(error) {
		console.log(error);
	});
}

