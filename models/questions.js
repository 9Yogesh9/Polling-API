const mongoose = require('mongoose');

const questions = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Options'
    }]
}, { timestamps: true });

const Questions = mongoose.model('Questions', questions);
module.exports = Questions;