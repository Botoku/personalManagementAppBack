const Tobuy = require("../models/tobuyModel");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTobuy = asyncWrapper(async (req, res) => {
  const tobuy = await Tobuy.find({});
  res.json({ numberOfTobuy: tobuy.length, tobuy });
});
const createTobuy = asyncWrapper(async (req, res) => {
  const tobuy = await Tobuy.create(req.body);
  res.json({ tobuy });
});

const getTobuy = asyncWrapper(async (req, res, next) => {
  const { id: tobuyID } = req.params;
  const tobuy = await Tobuy.findOne({ _id: tobuyID });
  if(!tobuy){
    return next(createCustomError(`No tobuy with id:${tobuyID}`, 404))
  }
  res.json({tobuy});
});
const updateTobuy = asyncWrapper(async (req, res, next) => {
  const {id: tobuyID} = req.params;
  const tobuy = await Tobuy.findOneAndUpdate({_id: tobuyID}, req.body, {
    new: true,
    runValidators: true
  })
  if(!tobuy) {
    return next(createCustomError(`No tobuy with id: ${tobuyID}`, 404))
  }
  res.json({tobuy});
})

const deleteTobuy = asyncWrapper(async (req, res, next) => {
  const {id: tobuyID} = req.params;
  const tobuy = await Tobuy.findOneAndDelete({_id: tobuyID})
  if(!tobuy){
    return next(createCustomError(`No tobuy with id:${tobuyID}`, 404))
  }
  res.send(`delete tobuy with id ${tobuyID}`);
})

module.exports = {
  getAllTobuy,
  createTobuy,
  getTobuy,
  updateTobuy,
  deleteTobuy,
};
