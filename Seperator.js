var link = "https://mail.google.com/mail/u/0";
document.getElementById("seperator").innerHTML = link;
link = link.split(/\/+/);
// link = link.join("")
console.log(link);
for (let i = 0; i < link.length; i++)
    document.getElementById("seperator").innerHTML += `<br>${i}. ${link[i]}`;