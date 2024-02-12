const express = require("express");
const {
  getAllMeals,
  createMeal,
  getIndividualMeal,
  updateIndividualMeal,
  deleteMeal,
} = require("../controllers/meal");

const router = express.Router();

router.route("/").post(createMeal);
router
  .route("/:id")
  .get(getAllMeals)
  .get(getIndividualMeal)
  .patch(updateIndividualMeal)
  .delete(deleteMeal);

module.exports = router;
