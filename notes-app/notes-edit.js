const noteId = location.hash.substring(1)
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const lastEdited = document.querySelector('#last-edited')
const removeButton = document.querySelector('#remove-note')

let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})
if (note === undefined) { 
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`

noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

removeButton.addEventListener('click', function (e) {
   removeNote(note.id)
   saveNotes(notes)
   location.assign('/index.html')
})

window.addEventListener('storage', function(e) {
   if (e.key === 'notes') {
       notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
        return note.id === noteId
    })
    if (note === undefined) { 
        location.assign('/index.html')
    }

    noteTitle.value = note.title
    noteBody.value = note.body
   }
})

