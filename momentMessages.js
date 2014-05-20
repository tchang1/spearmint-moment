//require the Twilio module and create a REST client
var client = require('twilio')('ACcb08645cd700ef8293b7466eed8219a9', '96bfe1ccfda5ff6f9fbe5012c4eccdd5');
var fs = require('fs');
var utility = require('./utility');

module.exports = {
	setUp: function(phoneNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Thanks for setting up Moment! We’ll send you your first reminder tomorrow morning. You can reply STOP at any time to opt-out. Love, the Mint team.' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: setUp "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});
	},

	setUpResponse: function(phoneNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'We\'re excited too! Expect to hear from us tomorrow morning.' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: setUp "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});
	},

	firstTimeUse: function(phoneNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Good morning! Ready to be deliberate about your spending? Respond with an amount you plan to save today.' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: FTU "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});
	},

	confirmation: function(phoneNumber, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Great! Text us an amount when you choose to save on the little things (skipping coffee). We\'ll let you know how you are doing towards your goal of ' + utility.formatCurrency(commitAmount) // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: confirmation "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},

	confirmSavings: function(phoneNumber, leftToGo, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Amazing! Just ' + utility.formatCurrency(leftToGo) + ' to go until you reach your goal of ' + utility.formatCurrency(commitAmount) + '. Text us when you save again!' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: confirmSavings "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},

	confirmSavingsGoalReached: function(phoneNumber, runningTotalSavings, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Congratulations! You reached your goal of ' + utility.formatCurrency(commitAmount) +' with a total savings of ' + utility.formatCurrency(runningTotalSavings) + ' so far today.' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: confirmSavings "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},

	commitError: function(phoneNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Hmmm… we didn’t get that. Try again? Make sure to enter numbers for the amount you want to save. (For example, reply “10” to record you want to save $10.)' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    	if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: error "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},

	savingsError: function(phoneNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'Hmmm… we didn’t get that. Try again? Make sure to enter numbers for the amount you didn’t spend. (For example, reply “10” to record saving $10.)' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    	if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: error "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},
 
 	dailyReminder: function(phoneNumber, yesterdaySavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'You saved ' + utility.formatCurrency(yesterdaySavings) + ' yesterday. That’s awesome! How much would you like to save today?' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: dailyReminder "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},

	final: function(phoneNumber, totalSavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: '+14156826769', // Our Twilio number
		    body: 'You\'ve saved ' + utility.formatCurrency(totalSavings) + ' this week. Amazing! Thank you so much for participating in these savings Moments with us. If you would be willing to talk on phone with us about your experience reply \'Yes\'' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    	if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: final "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	}

}


