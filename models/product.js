const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true,
        maxlength: [35, "name can't be more than 35 characters"],
        minlength: [2, "name can't be empty"],
        require: [true, "must provide product name"]
    },
    price: {
        type: Number,
        require: true,
        min: 10,
        max:10000

    },
    amount: {
        type: Number,
        default: 1,
        min: 1,
        max: 1000
    }   
});

module.exports = mongoose.model('product', productSchema);