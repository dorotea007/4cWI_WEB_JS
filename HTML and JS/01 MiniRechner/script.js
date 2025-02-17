function showResult(result) {
    document.getElementById("result").innerText = "Ergebnis: " + result;
}

function Addition() {
    let add1 = parseFloat(document.getElementById("number1").value) || 0;
    let add2 = parseFloat(document.getElementById("number2").value) || 0;
    showResult(add1 + add2);
}

function Subtraction() {
    let sub1 = parseFloat(document.getElementById("number1").value) || 0;
    let sub2 = parseFloat(document.getElementById("number2").value) || 0;
    showResult(sub1 - sub2);
}

function Multiply() {
    let mul1 = parseFloat(document.getElementById("number1").value) || 0;
    let mul2 = parseFloat(document.getElementById("number2").value) || 0;
    showResult(mul1 * mul2);
}

function Divide() {
    let div1 = parseFloat(document.getElementById("number1").value) || 0;
    let div2 = parseFloat(document.getElementById("number2").value) || 0;

    if (div2 === 0) {
        document.getElementById("result").innerText = "Fehler: Division durch 0 nicht möglich!";
    } else {
        showResult(div1 / div2);
    }
}
