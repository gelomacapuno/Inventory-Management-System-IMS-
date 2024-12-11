const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, `..`,`/public/img/`, `default-image.txt`);

const getImageDefault = () => {
    let defaultImage = '';
    try {
        const imageCode = fs.readFileSync(filePath, 'utf8');
        defaultImage = imageCode.trim();
    }catch(e){
        console.error(`Error Message: ${e}`)
    }
    return defaultImage;
}

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
    imageCode: {
        type: String,
        default: getImageDefault()
    },
    lastUpdatedBy: {
        type: String,
        default: 'SYSTEM'
    },
    status: {
        type: String,
        default: 'Active'
    }

});

module.exports = mongoose.model('Item', itemSchema);