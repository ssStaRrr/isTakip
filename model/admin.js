const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: Number
    }
})

module.exports = mongoose.model('Admin', admin)