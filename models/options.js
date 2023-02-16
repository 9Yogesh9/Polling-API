const mongoose = require('mongoose');

const options = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    },
    link_to_vote:{
        type:String
    }
}, { timestamps: true });

const Options = mongoose.model('Options', options);
module.exports = Options;