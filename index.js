let symbol = "", first_char = "", second_char = "", result = 0;
let val = document.getElementById("text");
val.innerHTML = "0";

function calc(value) {
    if (symbol === "" && result === 0) {
        first_char += value;
        val.innerHTML = first_char;
    } else {
        second_char += value;
        val.innerHTML = first_char + " " + symbol + " " + second_char; 
    }
}

function calc_value(value) {
    if (value === "C") {
        val.innerHTML = "0";
        first_char = "";
        second_char = "";
        symbol = "";
        result = 0;
        return;
    }

    if (value === "=") {
        if (first_char !== "" && second_char !== "") {
            calculate();
            val.innerHTML = result;
            first_char = result.toString();
            second_char = "";
            symbol = "";
        }
        return;
    }


    if (symbol === "" && first_char !== "") {
        symbol = value;
        val.innerHTML = first_char + " " + symbol;
    } else if (symbol !== "" && second_char !== "") {
        calculate();
        symbol = value;
        val.innerHTML = result + " " + symbol; 
    }
}

function calculate() {
    let num1 = parseFloat(first_char);
    let num2 = parseFloat(second_char);

    if (symbol === "+") {
        result = num1 + num2;
    } else if (symbol === "-") {
        result = num1 - num2;
    } else if (symbol === "*") {
        result = num1 * num2;
    }else if (symbol === "%") {
        result = num1 % num2;
    }

    first_char = result.toString();
    second_char = "";  
}
