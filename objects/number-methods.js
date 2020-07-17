let num = 103.941

console.log(num.toFixed(10))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() *(max - min + 1)) + min
// 10 - 20
console.log(randomNum)

// Challenge Area
// create a function
// will take in a person's guess (argument)
// range between 1-5 if true correct if false not correct

console.log(makeGuess(1))