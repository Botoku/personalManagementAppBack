const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  getTodo,
  deleteTodo,
} = require("../controllers/todo");
router.route("/").post(createTodo);
router.route("/:id").get(getAllTodos).get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
