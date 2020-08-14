const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

// 1. Setup input event for title
// 2. Update not object and save notes list
// 3. Repeat steps 1-2 for body
// 4. Setup a remove button that removes notes and sends users back to home page. 