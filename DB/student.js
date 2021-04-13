const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);