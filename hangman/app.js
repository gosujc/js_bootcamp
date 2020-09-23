// 1. Setup new "status" property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status

// Start the game and see "playing"
// Make two incorrect guesses to see "failed"
// Refresh the browser and guess "c", "a", and "t" to see "finished"

const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
const statusEl = document.querySelector("#status")

const game1 = new Hangman ('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessEl.textContent = game1.remainingGuesses
statusEl.textcontent = game1.checkStatus()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.checkStatus())
    puzzleEl.textContent = game1.getPuzzle()
    guessEl.textContent = game1.remainingGuesses
    statusEl.textcontent = game1.checkStatus()
})

