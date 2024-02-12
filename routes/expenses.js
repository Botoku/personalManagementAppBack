const express = require("express");
const router = express.Router();

const {
  getAllExpenses,
  getIndividualExpense,
  createExpense,
  updateExpense,
  deleteExpenses,
} = require("../controllers/expenses");

router.route("/").post(createExpense);
router
  .route("/:id")
  .get(getAllExpenses)
  .get(getIndividualExpense)
  .patch(updateExpense)
  .delete(deleteExpenses);

  module.exports = router
