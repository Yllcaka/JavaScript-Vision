var arr = ["BANANA", "STRAWBERRY", "ORANGE"];
var market = document.getElementById("market");

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