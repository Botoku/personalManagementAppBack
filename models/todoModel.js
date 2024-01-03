const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every todo needs a name"],
    trim: true,
    maxlength: [30, "Name cannot be more than 30 characters"],
  },
  dateCreated: {
    type: Date,
  },
  dateCompleted: Date,
  completedStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
