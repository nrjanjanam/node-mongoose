const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishScheme = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
},{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishScheme);

module.exports = Dishes;