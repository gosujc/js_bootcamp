const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
}

Hangman.prototype.getPuzzle = function () {
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

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && badGuess) {
        this.remainingGuesses--
    }
}

/* Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()

    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
    }

    if (!this.guessedLetters.includes(guess) && !this.word.includes(guess)) {
        this.remainingGuesses--
    }
} */

Hangman.prototype.checkStatus = function () { 
    
    const hasFailed = this.remainingGuesses <= 0
    const isFinished = this.guessedLetters.forEach()

    if (hasFailed) {
        this.status = "failed"
    } else if (isFinished && !hasFailed) {
        this.status = "finished"
    } else if (!hasFailed && !isFinished) {
        this.status = "playing"
    }

    return `${this.status}`
}
