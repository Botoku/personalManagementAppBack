const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
    ideaName: {
        type: String,
        required: [true, "Every idea needs a name"]
    },
    completedStatus: {
        type: Boolean,
        default: false
    },
    authorID : {
        type: String
    }
})

module.exports = mongoose.model('Idea', IdeaSchema)