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
        enum: ["food", "home", "pets", "general", "baby", "jide", "paola"],
        default: "home"
    },
    boughtStatus: {
        type: Boolean,
        default: false
    }
    
})

module.exports = mongoose.model('Tobuy', TobuySchema)