// //ask the user for the first number
// //ask the user for the second number
// //ask the user for the operation
// //perform the operation
// //display the result of the operation
const readline = require(`readline-sync`);
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {
  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidFirstNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidSecondNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGES['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
  }
  console.log(`The result is ${output}.`);
  prompt(MESSAGES['newCalculation']);
  let answer = readline.question();

  if (answer !== '1') break;
}
