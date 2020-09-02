// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hours: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// 1. Create two dates in the past (use string for Date)

const dateOne = new Date('March 1 2017 12:00:00')
const dateTwo = new Date()
// 2. Get time stamps for both
const stampOne = dateOne.getTime()
const stampTwo = dateTwo.getTime()

// 3. Figure out which is first and print its time (use toString)

if (stampOne < stampTwo ) {
    console.log(stampOne.toString())
} else if (stampTwo < stampOne) { 
    console.log(stampTwo.toString())
}


