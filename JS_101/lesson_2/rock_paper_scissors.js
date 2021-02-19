const readline = require(`readline-sync`);
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    return `Your are the winner`;
  } else if (choice === computerChoice) {
    return `Its a tie!`;
  } else {
    return `Computer wins!`;
  }
}

let answer = 'y';
while (answer === 'y') {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  prompt(displayWinner(choice, computerChoice));

  prompt(`Would you like to play another game (y/n)?`);
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`Please enter "y" or "n".`);
    answer = readline.question().toLocaleLowerCase();
  }
}

