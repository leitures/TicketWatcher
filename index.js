var https = require('https');
var smsTime = 0;

function TICKETWATCHER() {}


TICKETWATCHER.prototype.sayHello = function() {
  console.log('hello node.js');
}

TICKETWATCHER.prototype.getDocument = function(pageurl) {
  https.get(pageurl, function(req, res) {
    var result = '';
    req.on('data', function(data) {
      result += data;
    });
    req.on('end', function() {
      var resultJson = JSON.parse(result);
      if (resultJson.data.sale_flag != '不可售') {
        sendMessage();
      }
    });
  });
}

function sendMessage() {
  console.log(smsTime);
  smsTime = smsTime + 1;
  if(smsTime<5){
    console.log('发了第',smsTime,'次短信');
    https.get('https://xcx.wechat.aegis-info.com/api/mobile/checkcode?mobile=15895985241');
    https.get('https://xcx.wechat.aegis-info.com/api/mobile/checkcode?mobile=15651782088');
    https.get('https://xcx.wechat.aegis-info.com/api/mobile/checkcode?mobile=17602542334');
  }
}


module.exports = TICKETWATCHER;
