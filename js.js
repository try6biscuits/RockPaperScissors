let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerScore == 5 && computerScore < 5) {
    alert(`You win! your score is ${playerScore} to ${computerScore}`)
  }
  else if (playerScore < 5 && computerScore == 5) {
    alert(`You lose! your score is ${playerScore} to ${computerScore}`)
  }

  else if (playerSelection === computerSelection) {
    const retry = prompt("It's a tie! Do you want to retry? Enter yes or no");
    if (retry.toLowerCase() === 'yes') {
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
  ) { playerScore += 1
    return(`You win! ${playerSelection} beats ${computerSelection}`)
  } else {
    computerScore += 1
    return(`You lose! ${computerSelection} beats ${playerSelection}`)
  }
}


let rockBtn = document.getElementById('rockButton')
rockBtn.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  document.getElementById("results").textContent = playRound('rock', computerChoice);
});

let paperBtn = document.getElementById('paperButton') 
paperBtn.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  document.getElementById("results").textContent = (playRound('paper', computerChoice));
});

let scissorsBtn = document.getElementById('scissorsButton')
scissorsBtn.addEventListener('click', function() {
  const computerChoice = getComputerChoice();
  document.getElementById("results").textContent = (playRound('scissors', computerChoice));
});
