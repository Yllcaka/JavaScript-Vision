function calculate(type) {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let operator = document.getElementById("operator");
    let result = document.getElementById("result");
    if (!(/-*[0-9]+.*[0-9]*/g.test(first) && /-*[0-9]+.*[0-9]*/g.test(second))) {
        result.value = "Please enter a valid value";
        return false;
    }
    first = Number(first);
    second = Number(second);
    if (type == "addition") {
        result.value = first + second;
        operator.innerHTML = "+";
    } else if (type == "subtraction") {
        result.value = first - second;
        operator.innerHTML = "-";
    } else if (type == "multiplication") {
        result.value = first * second;
        operator.innerHTML = "*";
    } else {
        result.value = first / second;
        operator.innerHTML = "/";
    }
    if (Number(result.value) % 1 != 0) {
        result.value = Number(result.value).toFixed(2);
        console.log("AAAAAA")
    }
}