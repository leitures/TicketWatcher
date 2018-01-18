var TicketWatcher = require("./index");

var tw = new TicketWatcher();

setInterval(() => {
  tw.getDocument('https://show.bilibili.com/api/ticket/project/get?version=132&id=11850');
  tw.checkEvent('https://show.bilibili.com/api/ticket/search/list?version=132&keyword=aimer&pagesize=16&page=1&platform=web');
},1000)
