var TicketWatcher = require("./index");

var tw = new TicketWatcher();

setInterval(() => {
  tw.getDocument('https://show.bilibili.com/api/ticket/project/get?version=132&id=11850');
},20000)
