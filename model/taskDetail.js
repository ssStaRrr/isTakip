const mongoose = require('mongoose');

const taskDetail = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
        required: true
    },
    explanation: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String  // HH:mm formatında saat olacak
    }
})

module.exports = mongoose.model('TaskDetail', taskDetail)