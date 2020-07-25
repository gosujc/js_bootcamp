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

const stillTodos = todos.filter (function (todo) {
    return todo.completed === false
})

const newParagraph = document.createElement('p')
newParagraph.textContent = `You have ${stillTodos.length} todos left`
document.querySelector('body').appendChild(newParagraph)
// You have 2 todos left (p element)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// Add a p for each todo above (use text value)

