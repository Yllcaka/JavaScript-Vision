var reverseid = document.getElementById("reverse");
var reversed = document.getElementById("reversed");

reverseid.onkeyup = reversion;

function reversing(reverseid, reversed) {
    reverseid = reverseid.value.split("");
    reverseid = reverseid.reverse();
    reversed.innerHTML = reverseid.join("");
}

function reversion(event) {
    reversing(reverse, reversed);
}
reversing(reverse, reversed);