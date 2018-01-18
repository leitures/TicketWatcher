var TicketWatcher = require("./index");

var tw = new TicketWatcher();

setInterval(() => {
  tw.checkEventOnDaMai('aimer');
},10000)
