const mongoose = require('mongoose');

//Creating Schema of product
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

//Creating product modal with its schema
const Product = mongoose.model('products',productSchema);

//Exporting the product model to be used by other files
module.exports = Product;