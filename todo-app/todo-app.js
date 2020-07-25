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

const paragraphsTodo = todos.filter (function (text) {
    if (todos.completed === false) {
        return 
    }
})
}

console.log(paragraphsTodo)
// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// const pTodos = document.createElement('p')
// pTodos.textContent = `${getTodos}`
// document.querySelector('body').appendChild(pTodos)
