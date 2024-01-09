const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
    mealName:{
        type: String,
        required: [true, "Every meal needs a name"],
        trim: true
    },
    ingredients:{
        type: Array
    },
    recipeLinks: {
        type: Array
    },
    category: {
        type: String,
        enum: ["breakfast", "lunch", "dinner", "snack"]
    },
    description: {
        type: String,
        trim: true
    }

})

module.exports = mongoose.model("Meal", MealSchema)