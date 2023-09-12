const mongoose = require("mongoose");

const nameShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const NameModel = mongoose.model('Name', nameShema);
module.exports = NameModel