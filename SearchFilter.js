var search = document.getElementById("searching");
var list = document.getElementsByClassName("searchItem");


search.onkeyup = execution;

function execution(event) {
    filter(search, list);
}

function filter(search, list) {
    search = search.value;
    for (i of list) {
        if (i.innerHTML.toUpperCase().includes(search.toUpperCase())) {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }
    }
}