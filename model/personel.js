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
    },
    position: {
        type: String
    },
    tasks: [{ // Bu alan personelin görevlerini tutacak
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task' // Task modeline referans
    }]
})

module.exports = mongoose.model('Personel', personel)