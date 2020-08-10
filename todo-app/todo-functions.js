// Fetch existing todos from localStorage 

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    return JSON.parse(todosJSON)
} else {
    return []
}
}

// Save todos to localStorage

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })
}

// 1. Setup a root div
// 2. Setup and append a checkbox (set type attribute)
// someNode.setAttribute('type', 'checkbox')
// 3. Setup and append a span (set text)
// 4. Setup and append a button

// Get the DOM elements for an individual note

const generateTodoDom = function (todo) {
    const todoDiv = document.createElement('div')
    const checkBox = document.createElement('input')
    const textTodo = document.createElement('span')
    const todoButton = document.createElement('button')
    
    // Set Up Checkbox 
    checkBox.setAttribute('type', 'checkbox')
    todoDiv.appendChild(checkBox)

    // Set Up Span
    textTodo.textContent = todo.text
    todoDiv.appendChild(textTodo)

    // Set Up Button
    todoButton.textContent = 'x'
    todoDiv.appendChild(todoButton)

    return todoDiv
}

// Get the DOM elements for list summary

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}