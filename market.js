var arr = ["BANANA", "STRAWBERRY", "ORANGE"];
var market = document.getElementById("market");
var inputing = document.getElementById("fruitadder");

function inventory() {
    market.innerHTML = "";
    for (i of arr) {
        console.log(i);
        market.innerHTML += `<li>We got ${i} in the market</li>`;
    }
}

function fruitadder(input) {
    input = document.getElementById(input).value;
    if (!(arr.includes(input) || /[^A-Za-z]/.test(input) || input == ""))
        arr.push(input.toUpperCase());
    inventory()
}
inventory();
inputing.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        fruitadder(this.id)
    }
})