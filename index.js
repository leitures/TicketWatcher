var https = require('https');
var qs = require('querystring');
var request = require('request');

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
      if (resultJson.data.sale_flag != '不可售' && resultJson.data.banner) {
        sendMessage();
      } else {
        var date = new Date();
        console.log('还未开售', date);
      }
    });
  });
}

TICKETWATCHER.prototype.checkEvent = function(pageurl) {
  https.get(pageurl, function(req, res) {
    var result = '';
    req.on('data', function(data) {
      result += data;
    });
    req.on('end', function() {
      try {
        var resultJson = JSON.parse(result);
        if (resultJson.data.result.length > 0) {
          sendMessage();
        } else {
          console.log('bilibili还没上架');
        }
      } catch (e) {
        return console.error(e);
      }


    });
  });
}

TICKETWATCHER.prototype.checkEventOnDaMai = function(keyword) {
  var obj = {
    keyword: keyword
  };
  var data = qs.stringify(obj);

  request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: "http://search.damai.cn/keywordhit.html",
    method: "POST",
    json: true,
    body: data
  }, function(error, response, body) {
    try {
      if (body.keywordHitVo.length > 0) {
        console.log('大麦上架了');
        sendMessage();
      } else {
        console.log('大麦还没上架');
      };
    } catch (e) {
      return console.error(e);
    }

  });

}

function sendMessage() {
  console.log(smsTime);
  smsTime = smsTime + 1;
  if (smsTime < 10) {
    console.log('发了第', smsTime, '次短信');
    https.get('https://xcx.wechat.aegis-info.com/api/mobile/checkcode?mobile=15895985241');
    https.get('https://xcx.wechat.aegis-info.com/api/mobile/checkcode?mobile=15651782088');
    https.get('https://xcx.wechat.aegis-info.com/api/mobile/checkcode?mobile=17602542334');
  }
}


module.exports = TICKETWATCHER;
