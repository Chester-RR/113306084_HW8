function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

document.getElementById("calculateBtn").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            default:
                result = "Invalid operator.";
        }

        if (typeof result === "number") {
            result = `Result = ${result.toFixed(2)}`;
        }
    }

    document.getElementById("result").innerText = result;
});
function updateButtonText() {
    const operator = document.getElementById("operator").value;
    const calculateBtn = document.getElementById("calculateBtn");

    switch (operator) {
        case "+":
            calculateBtn.textContent = "Add";
            break;
        case "-":
            calculateBtn.textContent = "Subtract";
            break;
        case "*":
            calculateBtn.textContent = "Multiply";
            break;
        case "/":
            calculateBtn.textContent = "Divide";
            break;
        default:
            calculateBtn.textContent = "Calculate";
    }
}


document.getElementById("operator").addEventListener("change", updateButtonText);


updateButtonText();

