var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'UpiSdk', 'coolMethod', [arg0]);
};


module.exports.makePayment = function (arg0, success, error) {
    exec(success, error, 'UpiSdk', 'makePayment', [arg0]);
};