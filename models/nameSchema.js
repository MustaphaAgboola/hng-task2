const mongoose = require("mongoose");

const nameShema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 1,
        required: 'name is required',
    }
})

const NameModel = mongoose.model('Name', nameShema);
module.exports = NameModel