//Opearation taking addition as input
function operation(firstNumber, secondNumber, operator) {
  if (operator == "+") {
    return firstNumber + secondNumber;
  } else if (operator == "-") {
    return firstNumber - secondNumber;
  } else if (operator == "*") {
    return firstNumber * secondNumber;
  } else {
    return firstNumber / secondNumber
  }

}

const additionResult = operation(2, 3, "+");
console.log(additionResult); // 5

const subtractionResult = operation(2, 3, "-");
console.log(subtractionResult); // -1

const multiplicationResult = operation(2, 3, "*");
console.log(multiplicationResult); // 6

const divisionResult = operation(2, 3, "/");
console.log(divisionResult); // 0.66666666666666666

