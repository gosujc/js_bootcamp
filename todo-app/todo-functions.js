// 1. Add event handler to checkbox
// 2. Modify the correct objects completed property -> toggleTodo
// 3. Save and rerender


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

// Remove todo from list

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id 
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = function (id) {
    
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

// Get the DOM elements for an individual note

const generateTodoDom = function (todo) {
    const todoDiv = document.createElement('div')
    const checkBox = document.createElement('input')
    const textTodo = document.createElement('span')
    const todoButton = document.createElement('button')
    
    // Set Up Checkbox 
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.completed
    todoDiv.appendChild(checkBox)
    checkBox.addEventListener('change', function() {
        toggleTodo(todo.id)
    })

    // Set Up Span
    textTodo.textContent = todo.text
    todoDiv.appendChild(textTodo)

    // Set Up Button
    todoButton.textContent = 'x'
    todoDiv.appendChild(todoButton)
    todoButton.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoDiv
}

// Get the DOM elements for list summary

const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}