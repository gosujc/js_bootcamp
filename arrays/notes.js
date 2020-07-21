const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit bitter.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

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

console.log(findNotes(notes, 'work'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex (function (note, index) {
//         return note.title.toLowerCase ()=== noteTitle.toLowerCase ()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'some other office modification')
console.log(note)

