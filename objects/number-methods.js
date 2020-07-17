let num = 103.941

console.log(num.toFixed(10))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 10 - 20
console.log(randomNum)

// Challenge Area
// create a function
// will take in a person's guess (argument)
// range between 1-5 if true correct if false not correct

let makeGuess = function (answer) {

    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    if (randomNum === answer) {
        return `true`
    } else {
        return `false`
    }

}


console.log(makeGuess(1)) // If the number between one and five returns one then it should be true. 
