const mongoose =  require('mongoose')

const TobuySchema = new mongoose.Schema({
    itemToBuy: {
        type: String,
        required: [true, "Every tobuy needs a name"],
        trim: true,
    },
    estimatedPrice: {
        type: String
    },
    category: {
        type: String,
        enum: ["food", "home", "pets", "general", "baby"],
        default: "home"
    }
    
})

module.exports = mongoose.model('Tobuy', TobuySchema)