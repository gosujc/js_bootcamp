let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History', 
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}


let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

// Challenge Area
// Create function - take farenheit in - return object with all three. 

let tempConv = function (temp) {

    return {
        farenheit: `Will be ${temp} degrees`,
        celsius: `Will be ${(temp - 32) * (5/9)} degrees celsius`,
        kelvin: `Will be ${(temp + 459.67) * (5/9)} degrees kelvin.`
    }
}

let finalTemp = tempConv(100)

console.log(finalTemp)