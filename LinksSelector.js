links = document.getElementsByTagName("a");
main = document.getElementById("linklist");
for (i of links) {
    console.log(i.getAttribute("href"));
    main.innerHTML += `<li><span style="color:#66fb00;">${i.innerHTML}</span> sends you to: "${i.getAttribute("href")}"</li>`;
}