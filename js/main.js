function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    let computerSelection = num === 0 ? 'Rock' : num === 1 ? 'Paper' : 'Scissors'
    return computerSelection
}

