// function appendToResult(value) {
//   let currentValue = document.getElementById("result").value;

//   if (currentValue === "0") {
//     document.getElementById("result").value = value;
//   } else {
//     document.getElementById("result").value += value;
//   }
// }

// function clearResult() {
//   document.getElementById("result").value = "";
// }

// function calculate() {
//   let expression = document.getElementById("result").value;
//   let result;

//   try {
//     result = evalExpression(expression);
//     document.getElementById("result").value = result;
//   } catch (error) {
//     document.getElementById("result").value = "Error";
//   }
// }

// function evalExpression(expression) {
//   let operators = expression.split(/[0-9.]+/).filter(Boolean);
//   let numbers = expression.split(/[+\-*\/]/).map(Number);

//   if (operators.length === 1 && numbers.length === 2) {
//     let operator = operators[0];
//     let num1 = numbers[0];
//     let num2 = numbers[1];

//     switch (operator) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         if (num2 === 0) {
//           throw new Error("Division by zero");
//         }
//         return num1 / num2;
//       default:
//         throw new Error("Invalid operator");
//     }
//   } else {
//     throw new Error("Invalid expression");
//   }
// }

// function deleteLastCharacter() {
//   let currentValue = document.getElementById("result").value;
//   document.getElementById("result").value = currentValue.slice(0, -1);
// }
/////////////////////////

function appendToResult(value) {
  // Get the current value of the input field
  let currentValue = document.getElementById("result").value;

  // If the current value is '0', replace it with the new value; otherwise, append the new value
  if (currentValue === "0") {
    document.getElementById("result").value = value;
  } else {
    document.getElementById("result").value += value;
  }
}

function calculate() {
  // Get the expression from the input field
  let expression = document.getElementById("result").value;

  // Use eval() to evaluate the expression and update the input field with the result
  document.getElementById("result").value = eval(expression);
}
function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLastCharacter() {
  let currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}
