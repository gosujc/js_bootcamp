const todos = [ {
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// 1. Set up a div container for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it.
// 3. Create a renderTodos function to render and rerender the latest filetered data. 


// Starts

const filters = {
    searchText = ''
}

const renderedNotes = function (todos, filters) {
    const filteredNotes = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredNotes.forEach(function (todo) {
        const newText = document.createElement('p')
        newText.textContent = todo.text
        document.querySelector('#todos').appendChild(newText)
    })
}

renderedNotes(todos, filters)
// Ends

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// Listen for todo text change

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderedNotes(todos, filters)//.target gives us access to the input to access it's value property. 
})