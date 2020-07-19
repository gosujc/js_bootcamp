
const todos = ['Walk the dog', 'Eat dinner', 'Workout', 'Clean the car', 'Wash the dishes']

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list


//todos.splice(2, 1)
//todos.push('Watch a movie')
//todos.shift()


// console.log(`You have ${todos.length} todos!`)

// 1. The first item.
// 2. The second item.


todos.forEach(function (item, index) {

    const num = index + 1

    console.log(`${num}. ${item}.`)
})

