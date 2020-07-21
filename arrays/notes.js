const notes = [ {
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit bitter.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase ()=== noteTitle.toLowerCase ()
    })
    
}

const findNotes = function (notes, query) {
     return notes.filter (function (notes, index) { // passing a function in as an argument. // this returns a new array due to .filter 
        const isTitleMatch = notes.title.toLowerCase().includes(query.toLowerCase()) // it's checking to see if your notes array includes my query. // It returns true/false BECAUSE of the includes method. 
        const isBodyMatch = notes.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch // returns boolean
    })

}

// console.log(findNotes(notes, 'work'))

// const note = findNote(notes, 'some other office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)
