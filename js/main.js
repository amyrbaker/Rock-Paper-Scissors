function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    let computerSelection = num === 0 ? 'Rock' : num === 1 ? 'Paper' : 'Scissors'
    return computerSelection
}

function play(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')) {
        console.log(`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`)
        return 'player'
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock')){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`)
        return 'computer'
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log(`You tie! You both threw ${computerSelection}`)
        return 'tie'
    } else {
        return `You must select Rock, Paper, or Scissors`
    }
}

function game() {
    let playerScore = 0, computerScore = 0
    for (let i = 0; i < 5; i++) {
        let result = play(prompt('Make a selection'), computerPlay())
        if (result === 'player') playerScore++
        else if (result === 'computer') computerScore++
        else if (result === 'tie') i--
    }
    let winnerMessage = playerScore > computerScore ? `You win!` : `The Computer Wins!`
    console.log(`Final Score:
    You : ${playerScore} Computer : ${computerScore}
    ${winnerMessage}`)
}

game()