function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    let computerSelection = num === 0 ? 'rock' : num === 1 ? 'paper' : 'scissors'
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()}`)
        return 'player'
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')){
        console.log(`You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`)
        return 'computer'
    } else if (playerSelection === computerSelection) {
        console.log(`You tie! You both threw ${computerSelection}`)
        return 'tie'
    } else {
        return `You must select Rock, Paper, or Scissors`
    }
}

let playerScore = 0, computerScore = 0
function game(e) {
    const playerSelection = e.srcElement.id
    let result = playRound(playerSelection, computerPlay())
    if (result === 'player') playerScore++
    else if (result === 'computer') computerScore++
    console.log(playerScore, computerScore)
    if (playerScore + computerScore >= 5) {
        let winnerMessage = playerScore > computerScore ? `You win!` : `The Computer Wins!`
        console.log(`Final Score:
        You : ${playerScore} Computer : ${computerScore}
        ${winnerMessage}`)
    }
}

// game()

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click',game))