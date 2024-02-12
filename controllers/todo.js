const Todo = require("../models/todoModel");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require('../errors/custom-error')

const getAllTodos = asyncWrapper(async (req, res) => {
  const {id: authorID} = req.params
  const todos = await Todo.find({authorID: authorID});
  res.json({ numberOfTodos: todos.length, todos });
});
const createTodo = asyncWrapper(async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json({ todo });
});
const getTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOne({ _id: todoID });
  if (!todo) {
    
    return next(createCustomError(`No todo with id: ${todoID}`, 404))
  }
  res.json({ todo });
});
const updateTodo = asyncWrapper(async (req, res) => {
    const { id: todoID } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return next(createCustomError(`No todo with id: ${todoID}`, 404))
    }
    res.status(200).json({todo});
})
const deleteTodo = asyncWrapper(async (req, res, next) => {
    const { id: todoID } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoID });
    if (!todo) {
      return next(createCustomError(`No todo with id: ${todoID}`, 404))
    }
    res.send("Todo Deleted");
  
})
module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
