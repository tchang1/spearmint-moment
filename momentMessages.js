//require the Twilio module and create a REST client
var client = require('twilio')('ACcb08645cd700ef8293b7466eed8219a9', '96bfe1ccfda5ff6f9fbe5012c4eccdd5');
var fs = require('fs');
var utility = require('./utility');

module.exports = {
	setUp: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber,
		    body: 'Thanks for setting up Moment! We\'re here to help you be more deliberate about your spending and save money towards the things that matter. We’ll be sending you your first reminder tomorrow morning! You can reply STOP at any time to opt-out. Love, the Mint team.' // body of the SMS message

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

	setUpResponse: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
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

	commitedResponseV2: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'We\'re excited too! Expect to hear from us this evening to check up on your progress.' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: commitResponseV2 "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});
	},

	firstTimeUse: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
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

	firstTimeUseV2: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Good morning! Respond with an amount you aim to save today and we\'ll help you reach that target' // body of the SMS message

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

	firstTimeUseV3: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Good morning! Ready to be deliberate about your spending? Text us an amount when you choose to save on the little things throughout the day (skipping coffee).' // body of the SMS message

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

	confirmation: function(phoneNumber, twilioNumber, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Great! Throughout the day, text us an amount when you choose to save on the little things (skipping coffee). We\'ll let you know how you are doing towards your goal of ' + utility.formatCurrency(commitAmount) // body of the SMS message

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

	confirmationV2: function(phoneNumber, twilioNumber, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Great! Take a moment sometime today to put that money aside. For example, in a saving account or in an envelope.' // body of the SMS message

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

	confirmSavings: function(phoneNumber, twilioNumber, savingsToday, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Amazing! You\'ve saved '+ utility.formatCurrency(savingsToday)+' so far today.  Try and reach your goal of ' + utility.formatCurrency(commitAmount) + '. Text us when you save again!' // body of the SMS message

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

	confirmSavingsReached: function(phoneNumber, twilioNumber, savingsToday, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Amazing! You\'ve saved '+ utility.formatCurrency(savingsToday)+' so far today.  You\'ve your goal of ' + utility.formatCurrency(commitAmount) + ', Keep it up!' // body of the SMS message

		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        //console.log(responseData.from); // outputs "+14506667788"
		        //console.log(responseData.body); // outputs "word to your mother."
		        var logmsg="Type: confirmSavingsReached "+"From:"+responseData.from+" Body:"+responseData.body+" Direction:"+responseData.direction+ "SID:"+responseData.sid+'\n';
		        fs.appendFile('msglog.txt',logmsg, function (err) {
		        	if (err) return console.log(err);
		        });

		    }
		    else {
		    	fs.appendFile('errlog.txt',err);
		    }
		});	
	},

	confirmSavingsV3: function(phoneNumber, twilioNumber, savingsToday) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Amazing! You have saved ' + utility.formatCurrency(savingsToday) + ' so far today.  Be sure to text us when you save again!' // body of the SMS message

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

	confirmSavingsGoalReached: function(phoneNumber, twilioNumber, runningTotalSavings, commitAmount) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
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

	commitError: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
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

	savingsError: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
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
 
 	dailyReminder: function(phoneNumber, twilioNumber, yesterdaySavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Good morning! You saved ' + utility.formatCurrency(yesterdaySavings) + ' yesterday. That’s awesome! How much will you aim to save today?' // body of the SMS message

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

	dailyReminderV3: function(phoneNumber, twilioNumber, yesterdaySavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'You saved ' + utility.formatCurrency(yesterdaySavings) + ' yesterday. That’s awesome! Let’s see if you can beat it today!' // body of the SMS message

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

	endOfDayV2: function(phoneNumber, twilioNumber, todaySavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'You decided to save ' + utility.formatCurrency(todaySavings) + ' today. That’s awesome! Have you put the money aside? (Reply with y/n)' // body of the SMS message

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

	endOfDayV2YesResponse: function(phoneNumber, twilioNumber, todaySavings, yearSavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Congratulations!  By saving ' +utility.formatCurrency(todaySavings)+ ' everyday you will have saved ' +utility.formatCurrency(yearSavings) + ' in a year!' // body of the SMS message

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

	endOfDayV2NoResponse: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Committing to save is a great first step.  Let’s try again tomorrow.' // body of the SMS message

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

	endOfDayV2Error: function(phoneNumber, twilioNumber) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'We didn’t get that… please respond with a y/n response.' // body of the SMS message

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

	final_message: function(phoneNumber, twilioNumber, totalSavings) {
		//Send an SMS text message
		client.sendMessage({

		    to: phoneNumber, // User phone number 
		    from: twilioNumber, // Our Twilio number
		    body: 'Thank you so much for using Moment, we hope it has helped you save towards the things that matter. We would love to get your ideas and input on how to make this product better for you. Please allow for one of our product managers to contact you over the next few days for your valued thoughts.' // body of the SMS message

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


