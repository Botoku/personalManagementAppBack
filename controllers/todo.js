const getAllTodos = (req, res) => {
  res.send("All Todos");
};
const createTodo = (req, res) => {
  res.json(req.body);
};
const getTodo = (req, res) => {
  res.send("Get todo");
};
const updateTodo = (req, res) => {
  res.send("Update todo");
};
const deleteTodo = (req, res) => {
  res.send("Delete todo");
};
module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
