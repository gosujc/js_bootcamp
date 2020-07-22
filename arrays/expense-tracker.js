const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push ({
            description: description,
            amount: amount
        }) // "this" is used to access an object.
    },
    addIncome: function (description, amount) { 
        this.income.push({
            description: description, 
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    },
}

// Expense -> description, amount 
// addExpense -> description, amount
// getAccountSummary -> total up all expenses - > Andrew mead has $1250 in expenses. 

// Part 2
// 1. Add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary 
  // Andrew Mead has a balance of 10 dollars. $100 in income. $90 in expenses. 

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())