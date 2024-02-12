const asyncWrapper = require("../middleware/async");
const Expense = require("../models/expenseModel");
const getAllExpenses = asyncWrapper(async (req, res) => {
  const {id: authorID} = req.params
  const expenses = await Expense.find({authorID: authorID});
  res.json({ numberOfExpenses: expenses.length, expenses });
});
const createExpense = asyncWrapper(async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json({ expense });
});
const getIndividualExpense = asyncWrapper(async (req, res) => {
  const { id: ExpenseID } = req.params;
  const expense = await Expense.findOne({ _id: ExpenseID });
  res.json(expense);
});
const updateExpense = asyncWrapper(async (req, res) => {
  const { id: ExpenseID } = req.params;
  const expense = await Expense.findOneAndUpdate({ _id: ExpenseID }, req.body, {
    runValidators: true,
    new: true,
  });
  res.json({ expense });
});
const deleteExpenses = asyncWrapper(async (req, res) => {
  const { id: ExpenseID } = req.params;
    const expense = await Expense.findOneAndDelete({_id: ExpenseID})
  res.send(`Deleted expense with name "${expense.expenseName}"`);
});

module.exports = {
  getAllExpenses,
  createExpense,
  getIndividualExpense,
  updateExpense,
  deleteExpenses,
};
