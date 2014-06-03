var sender = require('./momentMessages');
var userService = require('./userService');

var variant2Number = '+14154634615';
var variant3Number = '+14157428555';

module.exports = function() {
	userService.getAllValidNumbers('variant2').then( function(users) {
        console.log(users.length +" users found");

            var i;
			for (i=0; i<users.length; i++) {
                var user = users[i];

                console.log("Reading valid number\n"+"Number: "+ user.number);
                if (user) {
                        sender.final_message(user.number, variant2Number);
                        console.log("Final sent");
			}
		}

    });

    userService.getAllValidNumbers('variant3').then( function(result) {
        var user;

        console.log(result.length +" users found");

            var i;
            for (i=0; i<result.length; i++) {
                user = result[i];

                console.log("Reading valid number\n"+"Number: "+ user.number);
                if (user) {
                        sender.final_message(user.number, variant3Number);
                        console.log("Final sent");
                }
            }
    });
};