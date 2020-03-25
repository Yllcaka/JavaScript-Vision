function validimi() {
    let invalid = document.getElementsByClassName("invalid");
    let forma = document.forms["forma"];
    let emri = forma["emri"];
    let mbiemri = forma["mbiemri"];
    let telefoni = forma["numri"];
    let email = forma["e-mail"];
    let returner = true;
    let elements = [forma, emri, mbiemri, telefoni, email];
    for (i of invalid) {
        i.style.display = "none";
    }
    for (i of elements) {
        i.style.boxShadow = "none";
    }

    function RE(element, validation) {
        element.style.boxShadow = "0px 0px 4px 1px rgba(255,0,0,1)";
        validation.style.display = "block";
        return false;
    }
    if (!(/[A-Z][a-z]+$/g.test(emri.value))) {
        returner = RE(emri, invalid[0])
    }
    if (!(/[A-Z][a-z]+$/g.test(mbiemri.value))) {
        returner = RE(mbiemri, invalid[1])
    }
    if (!(/^\+?\d{3}[-\s]?\d{2}[-\s]?\d{3}[-\s]?\d{3}$/g.test(telefoni.value))) {
        returner = RE(telefoni, invalid[2])
    }
    if (!(/\w+@[A-Za-z]+\.[A-Za-z]{2,3}(\.[A-Za-z]{0,2})?$/g.test(email.value))) {
        returner = RE(email, invalid[3])
    }
    return returner

}