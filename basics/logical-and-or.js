let temp = 55

// Logical And Operator - True if both sides are true. False otherwise.
// Logical or Operator - True if at least one side is true, false otherwise

if (temp >= 60 && temp <= 90) {
    console.log ('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log ('Eh. Do what you want')
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log ('Here is our vegan menu!')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log ('Here is one regular menu, and one vegan menu.')
} else {
    console.log ('Here is our regular menu.')
}
    

// Are both vegan? Only offer up vegan dishes 
// At least one vegan? Make sure to offer up some vegan options. 
// Else, offer up anything on the menu. 