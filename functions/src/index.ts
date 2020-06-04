const functions = require('firebase-functions');

exports.CurrencyConvert = functions.https.onRequest((req, res) => {
    res.send('Hello World!');
});