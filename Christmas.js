var current = new Date();
var christmas = new Date(2020, 11, 25, 0, 0, 0, 0);
var tillChristmas = christmas.getTime() - current.getTime();
var dita = 1000 * 60 * 60 * 24;
document.getElementById("christmas").innerHTML = `Days till Christmas: ${Math.ceil(tillChristmas / dita)}`;