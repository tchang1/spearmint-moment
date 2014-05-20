// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACcb08645cd700ef8293b7466eed8219a9';
var authToken = "96bfe1ccfda5ff6f9fbe5012c4eccdd5";
//var client = require('twilio')(accountSid, authToken);

var send = require('./momentMessages');

var twilio = require('twilio'),
    express = require('express');

// Create express app with middleware to parse POST body
var app = express();
app.use(express.urlencoded());

// Create a route to respond to a message
app.post('/https://demo.twilio.com/welcome/sms/reply/setup', function(req, res) {
    //Validate that this request really came from Twilio...
    if (twilio.validateExpressRequest(req, authToken)) {
        var twiml = new twilio.TwimlResponse();

        twiml.sms('Thanks for setting up Moment!');

        res.type('text/xml');
        res.send(twiml.toString());
    }
    else {
        res.send('Error. Expected Twilio.');
    }
});

app.listen(process.env.PORT || 3000);