const mongoose = require('mongoose');

const personel = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    mail: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    profileImage: {
        type: Buffer
    },
    department: {               // Departman bilgisi referansı
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',       // Bu, Department modeline referans
        required: true
    }
})

module.exports = mongoose.model('Personel', personel)