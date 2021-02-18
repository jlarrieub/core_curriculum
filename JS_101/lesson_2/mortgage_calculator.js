/* eslint-disable max-len */
/*-------------------MORTGAGE CALCULATOR------------*/
/*
THREE PIECES OF INPUT:
  -loanAmount
  -THE ANNUAL PERCENTAGE RATE (APR)
  -THE LOAN DURATION

OUTPUT:
  -MONTHLY INTEREST RATE
*/

const readline = require(`readline-sync`);
//link to json file with messages
const MESSAGES = require('./mortgage_messages.json');

//Extraction from JSON file mortgage_message.json
function prompt(key) {
  let message = MESSAGES[key];
  console.log(`=> ${message}`);
}

//invalidNumber function to be re-used
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0;
}

prompt('mortgageCalculator');

while (true) {
  //loan amount
  prompt('loanAmount');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('invalidLoanAmount');
    loanAmount = readline.question();
  }
  //Anual Interest Rate
  prompt('anualPercentageRate');
  let interestRate = readline.question();

  while (invalidNumber(interestRate)) {
    prompt('anualPercentageRateAgain');
    interestRate = readline.question();
  }
  //loan duration
  prompt('loanDuration');
  let loanDurationMonths = readline.question();

  while (invalidNumber(loanDurationMonths)) {
    prompt('loanDurationMonthsAgain');
    loanDurationMonths = readline.question();
  }
  //convertion to monthly rate
  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;

  //formula for monthly payment
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  //prompt for monthly payment
  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
  prompt(`anotherCalculation`);
  let answer = readline.question().toLowerCase();
  //if statement to restart again
  if (answer !== 'y') break;
}
