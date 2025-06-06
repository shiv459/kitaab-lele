const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    url: {
        type: String, 
        required: true,
    },
    title: {
        type: String, 
        required: true,
    },
    author: {
        type: String, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    desc: {
        type: String, 
        required: true,
    },
    language: {
        type: String, 
        required: true,
    }
}, {
    timestamps: true 
});

// Export the model
module.exports = mongoose.model("Book", bookSchema); // Use singular model name
