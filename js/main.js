function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    let computerSelection = num === 0 ? 'rock' : num === 1 ? 'paper' : 'scissors'
    return computerSelection
}

function playRound(e, computerSelection) {
    const playerSelection = e.srcElement.id
    if ((playerSelection === 'rock' && computerSelection === 'Scissors') || (playerSelection === 'paper' && computerSelection === 'Rock') || (playerSelection === 'scissors' && computerSelection === 'Paper')) {
        console.log(`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`)
        return 'player'
    } else if ((playerSelection === 'rock' && computerSelection === 'Paper') || (playerSelection === 'paper' && computerSelection === 'Scissors') || (playerSelection === 'scissors' && computerSelection === 'Rock')){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`)
        return 'computer'
    } else if (playerSelection === computerSelection) {
        console.log(`You tie! You both threw ${computerSelection}`)
        return 'tie'
    } else {
        return `You must select Rock, Paper, or Scissors`
    }
}

// function game() {
//     let playerScore = 0, computerScore = 0
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(prompt('Make a selection'), computerPlay())
//         if (result === 'player') playerScore++
//         else if (result === 'computer') computerScore++
//         else if (result === 'tie') i--
//     }
//     let winnerMessage = playerScore > computerScore ? `You win!` : `The Computer Wins!`
//     console.log(`Final Score:
//     You : ${playerScore} Computer : ${computerScore}
//     ${winnerMessage}`)
// }

// game()

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click',playRound))