const express = require("express");
const {
  getAllIdeas,
  getIndividualIdea,
  createIdea,
  updateIdea,
  deleteIdea,
} = require("../controllers/idea");
const router = express.Router();

router.route("/").post(createIdea);
router.route('/:id').get(getAllIdeas).get(getIndividualIdea).patch(updateIdea).delete(deleteIdea)

module.exports = router
