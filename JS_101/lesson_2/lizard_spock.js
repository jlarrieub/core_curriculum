let readline = require(`readline-sync`);
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
//still have to fix the choices, so you can choose r, p, sc

let humanWin = 0;
let computerWin = 0;

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'lizard' || computerChoice === 'scissors') ||
    (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
    (choice === 'scissors' && (computerChoice === 'lizard' || computerChoice === 'paper')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')))) {
    console.log(`You are the winner`);
    humanWin++;
  } else if (choice === computerChoice) {
    console.log(`It's a tie!`);
  } else {
    console.log(`You have lost`);
    computerWin++;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Welcome to R.P.S.S.L!`);

while (humanWin < 4 || computerWin < 4) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That is not a valid choice:`);
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt(`Your score is: ${humanWin}, the computers score is ${computerWin}`);

  if (humanWin === 5) {
    console.log(`You are the ultimate winner`);
    break;
  } else if (computerWin === 5) {
    console.log(`Better luck next time!`);
    break;
  }

  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`Please answer "y" or "n"`);
    answer = readline.question().toLowerCase();
  }
}

