const express = require("express");
const router = express.Router();

const {
  getAllExpenses,
  getIndividualExpense,
  createExpense,
  updateExpense,
  deleteExpenses,
} = require("../controllers/expenses");

router.route("/").get(getAllExpenses).post(createExpense);
router
  .route("/:id")
  .get(getIndividualExpense)
  .patch(updateExpense)
  .delete(deleteExpenses);

  module.exports = router
