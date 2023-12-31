function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function determineWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    computerSelection = computerSelection.toLowerCase(); 
   
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        alert(`You won! You chose ${playerSelection} while the computer chose ${computerSelection}`);
    } 
    
    else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        alert(`You lost! You chose ${playerSelection} while the computer chose ${computerSelection}`);
    }

    else {
        return 'tie'
    }
}

function playGame() {
    let playerSelection = prompt('Please pick either Rock, Paper, or Scissors');
    const computerSelection = getComputerChoice();

    const result = determineWinner(playerSelection, computerSelection);

    if (result === 'tie') {
        alert('It\'s a tie! Let\'s play another round.');
        playGame(); // Continue the game by calling playGame() again for the next round
    } 
}

playGame();
