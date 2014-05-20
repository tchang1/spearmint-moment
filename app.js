var express = require('express'),
    restService = require('./RESTService');
var cors= require('cors');
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.post('/signup/:variant/:number', cors(), restService.signup);
app.post('/messages/receive/:variant', restService.receivedMessage);
//app.post('/message/receive', messages.receive);

//app.get('/test', restService.test);

app.listen(3000);
console.log('Started server!');
