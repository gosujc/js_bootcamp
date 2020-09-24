
const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
const statusEl = document.querySelector("#status")

const game1 = new Hangman ('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessEl.textContent = game1.remainingGuesses
statusEl.textContent = game1.checkStatus()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.status)
    puzzleEl.textContent = game1.getPuzzle()
    guessEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.checkStatus()
})

