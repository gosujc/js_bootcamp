const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
}

Hangman.prototype.checkStatus = function () {
    const finished = this.word.every((letter) => { // alternative is just single line this.gussedLetters.includes(letter)
        return this.guessedLetters.includes(letter)
    })

    /* let finished = true

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            
        } else { 
            finished = false
        }
    }) */

    if (this.remainingGuesses <= 0) {
        this.status = "failed"
    } else if (finished) {
        this.status = "finished"
    } else {
        this.status = "playing"
    }

    return this.status
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

    this.checkStatus()
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

