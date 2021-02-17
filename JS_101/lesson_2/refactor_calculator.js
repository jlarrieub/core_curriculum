// //ask the user for the first number
// //ask the user for the second number
// //ask the user for the operation
// //perform the operation
// //display the result of the operation
const readline = require(`readline-sync`);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(`Welcome to the Calculator!`);


  prompt(`What is the first number?`);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(`Hmm... that doesnt look like a valid number\nPlease enter the first number:`);
    number1 = readline.question();
  }

  prompt(`What is the second number?`);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(`Hmm...that doesnt look like a valid number\nPlease enter the second number:`);
    number2 = readline.question();
  }

  prompt(`What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide`);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(`Must choose 1, 2, 3 or 4`);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
  }

  console.log(`The result is ${output}.`);


  // prompt(`Would you like to do another calculation?\n1)yes 2)no`);
  // let answer = readline.question();


