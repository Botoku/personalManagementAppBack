const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    expenseName: {
        type: String,
        required: [true, "Every expense needs a name"]
    },
    date: {
        type: Date
    },
    amount: {
        type: Number,
        required: [true, "Every expense needs an amount spent"]
    },
    location: {
        type: String
    }
})

module.exports = mongoose.model('Expense', ExpenseSchema)