var items = [{
    name: 'First item',
    amount: 32
}, {
    name: 'Second item',
    amount: 45
}, {
    name: 'Third item',
    amount: 12
}]
var item = items.map(x => x["amount"]);
var initial = items.map(x => `${x["name"]}:${x["amount"]}`);
item.sort();
var itemcontainer = document.getElementById("items");
var sorteditems = document.getElementById("sorteditems");
itemcontainer.innerHTML = initial.join("<br>");
sorteditems.innerHTML = "Vlerat e sortuara: " + item.join();