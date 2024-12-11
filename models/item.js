const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, `..`,`/public/img/`, `default-image.txt`);

let defaultImage = '';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // The content of the file as a string
    defaultImage = data;
});

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number, 
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String,
        default: defaultImage
    },
    lastUpdatedBy: {
        type: String,
        default: 'no-user'
    },
    status: {
        type: String,
        default: 'Active'
    }

});

module.exports = mongoose.model('Item', itemSchema);