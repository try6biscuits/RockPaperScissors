function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    computerSelection = computerSelection.toLowerCase(); 
   
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return(`You won! You chose ${playerSelection} while the computer chose ${computerSelection}`);
    } 
    
    else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        return(`You lost! You chose ${playerSelection} while the computer chose ${computerSelection}`);
    }

    else {
            alert('there was a tie, lets play again!')
            playMore()
    }
}

function playMore() {
    let playerSelection = prompt('')
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}


function game() {
    playMore()
    playMore()
    playMore()
    playMore()
    playMore()
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        playGame();

     if (result === 'player') {
             playerWins++;
        } 
    else if (result === 'computer') {
            computerWins++;
        }
    }
    alert(`The final score is you with ${playerWins}, as for computer they have  ${computerWins}`)

}


game()

// const result = playRound(playerSelection, computerSelection);
// if (result === true) {
//     tie();
// }

// function tie() {
//     playRound(playerSelection, computerSelection);
// }

// function tie() {
//     const newResult = playRound(playerSelection, computerSelection);

//     if (newResult === true) {
//         console.log("It's a tie! Let's play another round.");
//         tie(); // Recursive call if it's a tie
//     } else {
//         return newResult; // Return the win/loss result
//     }
// }


// function playGameAgain() {
//     let playerSelection = ('Please pick either Rock, Paper, or Scissors');
//     const computerSelection = getComputerChoice();

//     const result = determineWinner(playerSelection, computerSelection);

//     if (result === 'tie') {
//         console.log('It\'s a tie! Let\'s play another round.');
//         playGame(); // Continue the game by calling playGame() again for the next round
//     } 
// }



// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     for (let i = 0; i < 5; i++) {
//         playGame();

//      if (result === 'player') {
//              playerWins++;
//         } 
//     else if (result === 'computer') {
//             computerWins++;
//         }
//     }
//     alert(`The final score is you with ${playerWins}, as for computer they have  ${computerWins}`)

// }

// game() 