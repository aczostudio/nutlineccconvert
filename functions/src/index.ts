const functions = require('firebase-functions');
const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer pEGOq+Tl/M7XH0Ipjp0tmKtrYOReUTtAInutIeXtpWz0v/oVLefw8y6twpbJJ3eTgF3QApm6caL7EHjynnQGQn+P0kb+T3Qknn7nR3iBCLvs1h+o8VtsXtPC1xdQRTrJv4fFmnVyAAc+hZFTZ0oGOwdB04t89/1O/w1cDnyilFU=`
};

exports.TestLineBot = functions.https.onRequest((req, res) => {
    res.send('Test Line Bot!');
});

exports.CurrencyConvert = functions.https.onRequest((req, res) => {
  if (req.body.events[0].message.type !== 'text') {
    return;
  }
  reply(req.body);
});

const reply = (bodyResponse) => {
  return request({
    method: `POST`,
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        {
          type: `text`,
          text: bodyResponse.events[0].message.text
        }
	  ]
    })
  });
};