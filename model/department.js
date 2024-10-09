const mongoose = require('mongoose');

const department = new mongoose.Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model('Department', department)