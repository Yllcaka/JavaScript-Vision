var tabs = document.getElementsByClassName("tabs")[0].children;
var tabcontainers = document.getElementsByClassName("tabcontainer");

function switchtabs(number) {
    if (tabcontainers[number].style.display == "block") {
        return;
    }
    for (let i = 0; i < tabcontainers.length; i++) {
        tabcontainers[i].style.opacity = "0";
        setTimeout(function () {
            tabcontainers[i].style.display = "none";
            tabs[i].style.borderBottomColor = "transparent";
        }, 200)

    }
    setTimeout(function () {
        tabcontainers[number].style.display = "block";
        tabs[number].style.borderBottomColor = "white";
    }, 200)
    setTimeout(function () {
        tabcontainers[number].style.opacity = "1";
    }, 300)
}
for (let i = 0; i < tabcontainers.length; i++) {
    if (i == 0) {
        tabs[i].style.borderBottomColor = "white";
        break;
    }
    tabcontainers[i].style.display = "none";
}
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (event) {
        switchtabs(i);
    })
}