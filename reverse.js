function reverse() {
    var reverse = document.getElementById("reverse");
    var reversed = document.getElementById("reversed");
    reverse = reverse.value.split("");
    reverse = reverse.reverse();
    reversed.innerHTML = reverse.join("");
}
setInterval(function () {
    reverse();
}, 100)