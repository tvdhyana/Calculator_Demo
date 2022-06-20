function display(val) {
  //Create a list of all operators of the calculator
  let operators = [...document.querySelectorAll(".operator")].map(
    (el) => el.textContent
  );

  //Get the current value
  let resultElement = document.querySelector("#result");
  let currentResult = resultElement.value;

  //When the input is an operator and the last character of the result is an operator then overwrite it, otherwise append it.
  if (
    operators.includes(val) &&
    operators.includes(currentResult.charAt(currentResult.length - 1))
  ) {
    resultElement.value =
      currentResult.substring(0, currentResult.length - 1) + val;
  } else {
    resultElement.value += val;
  }
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

function clr() {
  document.getElementById("result").value = "";
}

let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
