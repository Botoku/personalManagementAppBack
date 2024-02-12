const asyncWrapper = require("../middleware/async");
const Meal = require("../models/mealModel");
const getAllMeals = asyncWrapper(async (req, res) => {
  const {id: authorID} = req.params

  const meals = await Meal.find({authorID: authorID});
  res.json({ numberOfMeals: meals.length, meals });
});
const createMeal = asyncWrapper(async (req, res) => {
  const meal = await Meal.create(req.body);
  res.json(meal);
});
const getIndividualMeal = asyncWrapper(async (req, res) => {
  const { id: mealID } = req.params;
  const meal = await Meal.findOne({ _id: mealID });
  res.json(meal);
});
const updateIndividualMeal = asyncWrapper(async (req, res) => {
  const { id: mealID } = req.params;
  const meal = await Meal.findOneAndUpdate({ _id: mealID }, req.body, {
    runValidators: true,
    new: true,
  });
  res.json(meal);
});
const deleteMeal = asyncWrapper(async (req, res) => {
  const { id: mealID } = req.params;
  const meal = await Meal.findOneAndDelete({ _id: mealID });
  res.send(`Meal with name ${meal.mealName} deleted`);
});

module.exports = {
  getAllMeals,
  createMeal,
  getIndividualMeal,
  updateIndividualMeal,
  deleteMeal,
};
