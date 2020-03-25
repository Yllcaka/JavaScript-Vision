// var moment = require("moment");
// var dataeSotit = new Date();
// var month = dataeSotit.getMonth() + 1;
// var day = dataeSotit.getDate();
// sot.innerHTML = `${(month<10)?"0"+month.toString():month}-${(day<10)?"0"+day.toString():day}-${dataeSotit.getFullYear()}`
var sot = document.getElementById("Date");

function Time(date) {
    date.innerHTML = moment().format('MMMM Do YYYY<br>H:mm:ss');
}
Time(sot);
setInterval(function () {
    Time(sot);
}, 1000)