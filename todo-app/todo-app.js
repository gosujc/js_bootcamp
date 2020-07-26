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

const falsePara = todos.filter(function (todo) {
    if (todo.completed === false) {
        return todo.text
    }
    // or 
    // return !todo.completed
})

const newParagraph = document.createElement('p')
newParagraph.textContent = `You have ${falsePara.length} todos left.`
document.querySelector('body').appendChild(newParagraph)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)


// Listen for new todo creation. 

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})

