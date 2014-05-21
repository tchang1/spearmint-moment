var sender = require('./momentMessages');
var userService = require('./userService');

var variant2Number = '+14154634615';
var variant3Number = '+14157428555';

module.exports = function() {
    userService.getAllValidNumbers('variant2').then( function(result) {
            var user;

            console.log(result.length +" users found");
            console.log("Commit variables set to no");
            var i;

            for (i=0; i<result.length; i++) {
                user = result[i];

                console.log("Reading valid number\n"+"Number: "+ user.number + "Savings: "+ user.savedToday+"\n");
                if (user) {

                    if (user.state == '2') {
                        console.log("Evening message sent");

                        user.state = '3';
                        sender.endOfDayV2(user.number, variant2Number, user.savedToday);
                        userService.saveUser(user, 'variant2');
                    }
                }
                console.log("Evening reminder send and savings set to 0");
            }
        },

        function(error) {
            console.log(error);
        });
};


