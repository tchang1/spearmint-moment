var variant2 = require('./variant2');
var variant3 = require('./variant3');

exports.signup = function(req, res) {
    var variant = req.params.variant;
    if ('variant2' == variant) {
        variant2.signup(req, res);
    }
    else if ('variant1' == variant) {
        variant1.signup(req, res);
    }
    else if ('variant3' == variant) {
        variant3.signup(req, res);
    }
};

exports.receivedMessage = function(req, res) {
    var variant = req.params.variant;
    if ('variant2' == variant) {
        variant2.receiveMessage(req, res);
    }
    else if ('variant1' == variant) {
        variant1.receiveMessage(req, res);
    }
    else if ('variant3' == variant) {
        variant3.receiveMessage(req, res);
    }
};