let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstOperand = null;

function appendNumber(number) {
  if (display.innerText === "0" || operator) {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
  currentInput = display.innerText;
}

function appendOperator(op) {
  if (currentInput && !operator) {
    firstOperand = parseFloat(currentInput);
    operator = op;
  }
}

function clearDisplay() {
  display.innerText = "0";
  currentInput = "";
  operator = null;
  firstOperand = null;
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
  currentInput = display.innerText;
}

function calculate() {
  if (operator && currentInput) {
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
    }
    display.innerText = result;
    firstOperand = result;
    operator = null;
    currentInput = "";
  }
}
