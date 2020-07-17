
const todos = ['Walk the dog', 'Eat dinner', 'Workout', 'Wash the dishes', 'Hangout w/ friends']

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list


todos.splice(2, 1)
todos.push('Watch a movie')
todos.shift()


console.log(`You have ${todos.length} todos!`)
console.log(todos)

