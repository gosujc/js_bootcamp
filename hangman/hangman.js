// 1. Convert "getStatusMessage" to a custom getter for "statusMessage"
// 2. Convert "getPuzzle" to a custom getter for "puzzle"
// 3. Change usage in app.js

class Hangman { 
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "playing"
    }
    get statusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === "failed") {
            return `Nice Try! The word was "${this.word.join('')}"`
        } else if (this.status === "finished") {
            return `Great work! You guessed the word!`
        }
    }
    checkStatus() {
        const finished = this.word.every((letter) => { // alternative is just single line this.gussedLetters.includes(letter)
            return this.guessedLetters.includes(letter) || letter === ' '
        })
    
        if (this.remainingGuesses <= 0) {
            this.status = "failed"
        } else if (finished) {
            this.status = "finished"
        } else {
            this.status = "playing"
        }
    
        return this.status
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })
    
        return puzzle 
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()

        const isUnique = !this.guessedLetters.includes(guess)
        const badGuess = !this.word.includes(guess)
        const isPlaying = this.status === "playing"
    
        if (isUnique && isPlaying) {
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && badGuess) {
            this.remainingGuesses--
        }
    
        this.checkStatus()
    }
}

