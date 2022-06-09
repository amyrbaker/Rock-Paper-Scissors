function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    let computerSelection = num === 0 ? 'rock' : num === 1 ? 'paper' : 'scissors'
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        document.querySelector('#roundResults').innerText = `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()}`
        return 'player'
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')){
        document.querySelector('#roundResults').innerText = `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`
        return 'computer'
    } else if (playerSelection === computerSelection) {
        document.querySelector('#roundResults').innerText = `You tie! You both threw ${computerSelection}`
        return 'tie'
    }
}

let playerScore = 0, computerScore = 0
function game(e) {
    const playerSelection = e.srcElement.id
    let result = playRound(playerSelection, computerPlay())
    if (result === 'player') playerScore++
    else if (result === 'computer') computerScore++
    document.querySelector('#finalResults').innerText = `
    Current Score: You: ${playerScore} Computer: ${computerScore}`
    console.log(playerScore, computerScore)
    if (playerScore + computerScore >= 5 || playerScore === 3 || computerScore === 3) {
        let winnerMessage = playerScore > computerScore ? `You win!` : `The Computer Wins!`
        document.querySelector('#finalResults').innerText = `Final Score:
        You : ${playerScore} Computer : ${computerScore}
        ${winnerMessage}`
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click',game))