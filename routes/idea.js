const express = require("express");
const {
  getAllIdeas,
  getIndividualIdea,
  createIdea,
  updateIdea,
  deleteIdea,
} = require("../controllers/idea");
const router = express.Router();

router.route("/").get(getAllIdeas).post(createIdea);
router.route('/:id').get(getIndividualIdea).patch(updateIdea).delete(deleteIdea)

module.exports = router
