const mongoose = require('mongoose');
const Item = require('../models/item');


mongoose.connect('mongodb://127.0.0.1:27017/item-db')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })

const seedDb = async() => {
    await Item.deleteMany({});

    await Item.insertMany([
        {
            name: `Item1`,
            category: `Category1`,
            description: `Testing Item`,
            price: 1000,
            quantity: 5
        },
        {
            name: `Item2`,
            category: `Category1`,
            description: `Testing Item2`,
            price: 1000,
            quantity: 5
        },
        {
            name: `Item3`,
            category: `Category2`,
            description: `Testing Item3`,
            price: 1000,
            quantity: 5
        }
    ])
    // const items = new Item({
    //     category: 'Sample',
    //     description: 'Sample description',
    //     name: 'Sample Item',
    //     quantity: 3,
    //     price: 2300
    // })
    // await items.save();
}

seedDb().then(() => {
    mongoose.connection.close();
})
