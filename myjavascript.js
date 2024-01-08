function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex]
    console.log(randomChoice)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock' ) ||
       (playerSelection === 'scissors' && computerSelection === 'paper' )) {
        return(`You win! ${playerSelection} beats ${computerSelection}`)
       }

}