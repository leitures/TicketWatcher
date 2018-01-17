var http = require('http');
var cheerio = require('cheerio');

function TICKETWATCHER() {
}

TICKETWATCHER.prototype.sayHello = function () {
  console.log('hello node.js');
}

TICKETWATCHER.prototype.getDocument = function (pageurl) {
  http.get(pageurl, function(req, res) {  
    var result = '';  
    req.on('data', function(data) {  
        result += data;  
    });  
    req.on('end', function() {  
        console.info(result);  
        // parseHtml(result);  
    });  
});  
  
}

function parseHtml(result) {  
  console.log('hehe');
  var $ = cheerio.load(result);  
  //获取html  
  //console.info($.html());  
  //获取文本内容  
  //console.info($.text());  
  //获取文本，将多个空白符 替换成空格  
  //console.info($.text().replace(/\s+/g,' '));  
  //获取文本，将多个空格 替换成一个空  
  //console.info($.text().replace(/[ ]+/g,' '));  
  //获取文件，将多个换行替换成 一个换行  
  //console.info($.text().replace(/(\r\n)+[ ]+/g,'\r\n').replace(/(\r\n)+/g,'\r\n'));  
  //过去文件，将多个连续换行替换成 一个换行  
  //console.info($.text().replace(/(\r\n)+/g,'\r\n'));  
  //解析html内容   
  // itemList[]   
  // {title:'',linkUrl：’‘}  
  // var captionList = $('.product-buy');  
  // var itemList = [];  
  // captionList.each(function(item) {  
  //     var cap = $(this);  
  //     //console.log(cap.find('h3').text());  
  //     var item = {  
  //         title: cap.find('h3').text(),  
  //         linkUrl: cap.find('a').attr('href')  
  //     }  
  //     itemList.push(item);  
  // });  
  // console.info(captionList);  

}  




module.exports = TICKETWATCHER;