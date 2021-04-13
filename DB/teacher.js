const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
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
    idType: {
        type: String,
        required: true
    },
    id: { 
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);