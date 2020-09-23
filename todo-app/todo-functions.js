

// Fetch existing todos from localStorage 

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON !== null ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo from list

const removeTodo = function (id) {
    const todoIndex = todos.findIndex((todo) => todo.id === id )

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a Todo

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}


// Render application todos based on filters

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => document.querySelector('#todos').appendChild(generateTodoDom(todo)))
}

// Get the DOM elements for an individual note

const generateTodoDom = (todo) => {
    const todoDiv = document.createElement('div')
    const checkBox = document.createElement('input')
    const textTodo = document.createElement('span')
    const todoButton = document.createElement('button')
    
    // Set Up Checkbox 
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.completed
    todoDiv.appendChild(checkBox)
    checkBox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Set Up Span
    textTodo.textContent = todo.text
    todoDiv.appendChild(textTodo)

    // Set Up Button
    todoButton.textContent = 'x'
    todoDiv.appendChild(todoButton)
    todoButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoDiv
}

// Get the DOM elements for list summary

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}