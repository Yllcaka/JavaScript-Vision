function blocking(stuff) {
    stuff = document.getElementById(stuff).innerHTML;
    i = 0;
    while (true) {
        console.log("This program is doing it's shenanigans")
        stuff = `This is iteration number ${i}`;
        i++;
    }
}