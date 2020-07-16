let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

// name, age, location

// Andrew is 27 and lives in Philadelphia. 
// Increase age by 1 and print message again.

let myHuman = {
    name: 'Brian',
    age: 27,
    location: 'Long Beach, CA'
}

console.log(`${myHuman.name} is ${myHuman.age} years old and lives in ${myHuman.location}.`)

myHuman.age = myHuman.age + 1

console.log(`${myHuman.name} is ${myHuman.age} years old and lives in ${myHuman.location}.`)