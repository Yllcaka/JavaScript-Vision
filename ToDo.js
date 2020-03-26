var checkboxes = document.getElementsByName("check");
var newtask = document.getElementById('NewTask');

function removing() {
    let remove = document.getElementsByTagName("i");
    let DONE = document.getElementById("DONE");

    let labels = document.getElementsByClassName("labels")
    for (let i = 0; i < remove.length; i++) {
        let itemnr = checkboxes[i];
        let label = labels[i].innerHTML;
        console.log(i);
        checkboxes[i].checked = false;
        remove[i].addEventListener('click', function () {
            itemnr.parentNode.remove();
        });
        checkboxes[i].addEventListener('click', function (event) {
            event.preventDefault();
            itemnr.parentNode.remove();
            DONE.innerHTML += `<p><span class="icon-ok"></span>&nbsp${label}</p>`;

        })
    }
}

function addToDo(item) {
    let toDo = document.getElementById("to-do-list");
    let lastitem, i, a;
    try {
        lastitem = checkboxes[checkboxes.length - 1].id;
        switch (lastitem.length) {
            case 6:
                a = 2;
                break;
            case 7:
                a = 3;
                break;
            default:
                a = 1;
        }
        i = parseInt(lastitem.substring(lastitem.length - a, lastitem.length));

    } catch (error) {
        lastitem = 1;
        i = 1;
    }

    // console.log(i[]);
    console.log(i);
    let cross = `<i class="fas fa-times"></i>`;
    if (item.trim() == "") {
        return false;
    }
    // existingItem = document.getElementById(`item${i}`);
    existingItem = document.getElementById(`item${i+1}`);
    let toDoItem = "<div class='to-do-item'>";
    let checkbox = `&nbsp<input type="checkbox" class="icon-ok" id="item${i+1}" name="check">`;
    let label = `&nbsp<label class="labels" for="item${i+1}">${item}</label></div>`;
    if (!(existingItem)) {
        toDo.innerHTML += toDoItem + cross + checkbox + label;
        console.log(toDoItem + cross + checkbox + label);
    }
    removing();
}
window.onload = removing();
newtask.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        addToDo(this.value);
    }
})