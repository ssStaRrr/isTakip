const mongoose = require('mongoose');

const task = new mongoose.Schema({
    taskGiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personel",
        require: true
    },
    taskTaker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personel",
        require: true
    },
    details: {
        type: String
    },
    status: {
        type: String,
        enum: ['çözüldü', 'çözülmedi', 'devam ediyor'],
        default: 'çözülmedi'  // İsteğe bağlı, varsayılan değer 'çözülmedi'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('task', task)