let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// Challenge Area

let temp = 4

if (temp <= 31) {
    console.log('It is freezing outside!')
} else if (temp >= 120) {
    console.log('It is hot outside')
} else {
    console.log ('Go for it! it is pretty nice!')
}

// It is freezing outside! 31
// It is hot outside! 120
// Go for it. It is pretty nice. 