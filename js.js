let hasTied = false; // Variable to track if a tie has occurred

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection && !hasTied) {
    const retry = prompt("It's a tie! Do you want to retry? Enter yes or no");
    if (retry.toLowerCase() === 'yes') {
      hasTied = true; // Set the flag to prevent further ties
      playerSelection = prompt('Enter either rock, paper, or scissors');
      return playRound(playerSelection, computerSelection); 
    } else {
      return "Game over! It's a tie.";
    }

  } else if (playerSelection === computerSelection && hasTied) {
    return "Game over! It's another tie.";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let rockBtn = document.getElementById('rockButton')
rockBtn.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  console.log(playRound('rock', computerChoice));
});

let paperBtn = document.getElementById('paperButton') 
paperBtn.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  console.log(playRound('paper', computerChoice));
});

let scissorsBtn = document.getElementById('scissorsButton')
scissorsBtn.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  console.log(playRound('scissors', computerChoice));
});
