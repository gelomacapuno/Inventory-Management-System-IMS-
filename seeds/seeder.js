const mongoose = require("mongoose");
const Item = require("../models/item");

mongoose
  .connect("mongodb://127.0.0.1:27017/item-db")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const seedDb = async () => {
  await Item.deleteMany({});

  await Item.insertMany([
    {
      name: `Pechay Seeds`,
      category: `Seeds`,
      description: `High-quality pechay seeds perfect for starting your vegetable garden. Each packet contains  100 seeds , ensuring a lush and nutritious harvest. Easy to grow and ideal for home gardening.`,
      price: 47,
      quantity: 10,
    },
    {
      name: `Tomato Seeds`,
      category: `Seeds`,
      description: `Premium tomato seeds for growing plump, juicy tomatoes. Each packet contains  80 seeds  that are suitable for both small gardens and large farms, ensuring a high yield and vibrant flavor.`,
      price: 55,
      quantity: 15,
    },
    {
      name: `Eggplant Seeds`,
      category: `Seeds`,
      description: `Grow fresh and healthy eggplants with these reliable seeds. Each packet includes  70 seeds  resistant to common pests, producing a bountiful harvest with proper care.`,
      price: 55,
      quantity: 45,
    },
    {
      name: `Loam Soil (1kg)`,
      category: `Soil`,
      description: `Fertile loam soil weighing  1 kg , rich in nutrients and perfect for planting a variety of crops. Ensures excellent water retention and drainage for healthy plant growth.`,
      price: 20,
      quantity: 35,
    },
    {
      name: `Clay Soil (1kg)`,
      category: `Soil`,
      description: `Premium clay soil weighing  1 kg , ideal for plants requiring strong root support. Helps retain moisture and provides essential minerals for robust plant development.`,
      price: 97,
      quantity: 65,
    },
    {
      name: `Loam Soil (1kg)`,
      category: `Soil`,
      description: `Fertile loam soil weighing  1 kg , rich in nutrients and perfect for planting a variety of crops. Ensures excellent water retention and drainage for healthy plant growth.`,
      price: 20,
      quantity: 35,
    },
    {
      name: `Clay Soil (1kg)`,
      category: `Soil`,
      description: `Premium clay soil weighing  1 kg , ideal for plants requiring strong root support. Helps retain moisture and provides essential minerals for robust plant development.`,
      price: 97,
      quantity: 65,
    },
    {
      name: `Hand Trowel`,
      category: `Tools`,
      description: `Durable and lightweight hand trowel, ideal for digging, transplanting, and gardening. Its ergonomic design ensures comfort during use.`,
      price: 18,
      quantity: 14,
    },
    {
      name: `Sickle`,
      category: `Tools`,
      description: `High-quality sickle designed for efficient harvesting and cutting. Its sharp blade ensures smooth operations in farming and gardening.`,
      price: 54,
      quantity: 7,
    },
  ]);
};

seedDb().then(() => {
  mongoose.connection.close();
});
