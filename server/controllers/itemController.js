const mongoose = require('mongoose');
const Item = require('../../models/item');

mongoose.connect('mongodb://127.0.0.1:27017/item-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

//Exports

//Root
exports.root = (req, res) => {
    res.redirect('/items');
}

//Home/List of all items
exports.list = async(req, res) => {
    const items = await Item.find({});
    console.log(items);
    // res.render('index', {items});
}