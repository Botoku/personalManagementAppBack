const express = require("express");

const router = express.Router();

const {
  getAllTobuy,
  createTobuy,
  getTobuy,
  updateTobuy,
  deleteTobuy,
} = require("../controllers/tobuy");

router.route("/").post(createTobuy);
router.route("/:id").get(getAllTobuy).get(getTobuy).patch(updateTobuy).delete(deleteTobuy);

module.exports = router
