// Function - input (argument), code, output

let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
    let result = num * num 
    return result 
}


let value = square(3) 
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area

// convertFarenheitToCelsius

// Call a couple of times (32 -> 0) (68 -> 20)

// Print the converted values. 

let convertFarenheitToCelsius = function (num) {
    let result = (num - 32) * (5/9)
    return result
}

let result = convertFarenheitToCelsius(32)
let resultTwo = convertFarenheitToCelsius(68)

console.log(result)
console.log(resultTwo)