function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex]
    console.log(randomChoice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("It's a tie! Retrying the round!");
        playRound(playerSelection, computerSelection)
    }

    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock' ) ||
       (playerSelection === 'scissors' && computerSelection === 'paper' )) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
       }
       
    else if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper' ) ||
    (playerSelection === 'paper' && computerSelection === 'scissors' )) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }

}