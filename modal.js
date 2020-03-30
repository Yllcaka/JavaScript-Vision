var modal = document.getElementById("modal");
var close = document.getElementById("modalclose");
var open = document.getElementById("modalbutton");
open.onclick = () => {
    modal.style.display = "block";
    console.log(modal.style.display)
}
close.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal)
        modal.style.display = "none";
}