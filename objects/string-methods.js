let name = '     Andrew Mead   '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case

console.log(name.toLowerCase())


// Include method

let password = 'abc123sdfse098'
console.log(password.includes('password'))

// Trim

console.log(name.trim())


// Challenge Area 

// isValidPassword
// length is more than 8 -- and it doesn't include the word password.

let isValidPassword = function (password) {
    return (!password.includes('password') && password.length > 8)

}

console.log(isValidPassword('asdfp')) // false
console.log(isValidPassword('abc123!#$%^')) // true
console.log(isValidPassword('asdfpasdedpassword')) // false

