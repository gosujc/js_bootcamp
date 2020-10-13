// HTTP (HyperText Transfer Protocal)
// Request - What do we want to do 
// Response - What was actually done. 

const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")


const game1 = new Hangman ('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
})

getPuzzle("3", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
}) 

getCountry("KR", (error,country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})

// 1. Create a new function for getting country details
// 2. Call it with 2 arguments; country code, the callback function.
// 3. Make the HTTP request and call the callback with country information.
// 4. Use the callback to print the country name. 

// Making an HTTP Request

// const newRequest = new XMLHttpRequest()
// const countryCode = "MX"

// newRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find(function (country) {
//             return country.alpha2Code === countryCode
//         })
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log("Unable to fetch data")
//     }
// })

// newRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// newRequest.send() 