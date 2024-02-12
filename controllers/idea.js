const Idea = require("../models/ideaModel");
const asyncWrapper = require("../middleware/async");
const getAllIdeas = asyncWrapper(async (req, res) => {
  const {id: authorID} = req.params

  const idea = await Idea.find({authorID: authorID});

  res.json({ numberOfIdeas: idea.length, idea });
});

const createIdea = asyncWrapper(async (req, res) => {
  const idea = await Idea.create(req.body);

  res.json({ idea });
});
const getIndividualIdea = asyncWrapper(async (req, res) => {
  const { id: ideaID } = req.params;
  const idea = await Idea.findOne({ _id: ideaID });
  res.json({ idea });
});
const updateIdea = asyncWrapper(async (req, res) => {
  const { id: ideaID } = req.params;
  const idea = await Idea.findOneAndUpdate({ _id: ideaID }, req.body, {
    runValidators: true,
    new: true,
  });
  res.json({ idea });
});

const deleteIdea = asyncWrapper(async (req, res) => {
  const { id: ideaID } = req.params;
  const idea = await Idea.findOneAndDelete({ _id: ideaID });
  res.send(`Deleted idea with name "${idea.ideaName}"`);
});

module.exports = {
  getAllIdeas,
  createIdea,
  getIndividualIdea,
  updateIdea,
  deleteIdea,
};
