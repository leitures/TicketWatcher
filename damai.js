var TicketWatcher = require("./index");

var tw = new TicketWatcher();

setInterval(() => {
  var date = new Date();
  console.log(date);
  tw.checkEventOnDaMai('aimer');
},10000)
