const express = require("express");
const {
  getAllMeals,
  createMeal,
  getIndividualMeal,
  updateIndividualMeal,
  deleteMeal,
} = require("../controllers/meal");

const router = express.Router();

router.route("/").get(getAllMeals).post(createMeal);
router
  .route("/:id")
  .get(getIndividualMeal)
  .patch(updateIndividualMeal)
  .delete(deleteMeal);

module.exports = router;
