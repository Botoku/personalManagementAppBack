const express = require("express");

const router = express.Router();

const {
  getAllTobuy,
  createTobuy,
  getTobuy,
  updateTobuy,
  deleteTobuy,
} = require("../controllers/tobuy");

router.route("/").get(getAllTobuy).post(createTobuy);
router.route("/:id").get(getTobuy).patch(updateTobuy).delete(deleteTobuy);

module.exports = router
