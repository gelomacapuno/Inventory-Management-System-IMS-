const mongoose = require("mongoose");
const Item = require("../../models/item");

mongoose
  .connect("mongodb://127.0.0.1:27017/item-db")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

let routeName = "";

//Home or List of all items
exports.list = async (req, res) => {
  routeName = req.originalUrl;
  let success = req.query.success;
  success = success === undefined ? "" : success;
  const items = await Item.find({ status: "Active" });
  res.render("index", { items, success, routeName });
};

//Show specific
exports.show = async (req, res) => {
  routeName = req.originalUrl;
  let success = req.query.success;
  success = success === undefined ? "" : success;
  const item = await Item.findById(req.params.id);
  res.render("show", { item, success, routeName });
};

// Create Item Page
exports.addItemForm = (req, res) => {
  routeName = req.originalUrl;
  res.render("addForm", { routeName });
  // console.log("addItemForm");
};

//Add Record
exports.create = async (req, res) => {
  if (!req.file) {
    var item = new Item({ ...req.body });
  } else {
    var fileBase64 = req.file.buffer.toString("base64");
    var item = new Item({ ...req.body, imageCode: fileBase64 });
  }
  await item.save();

  const success = "Item added successfully.";
  res.redirect(`/items?success=${success}`);
};

// Edit Page
exports.editItemForm = async (req, res) => {
  routeName = req.originalUrl;
  const item = await Item.findById(req.params.id);
  res.render("editForm", { item, routeName });
};

//Update Record
exports.update = async (req, res) => {
  const { id } = req.params;

  if (!req.file) {
    await Item.findByIdAndUpdate(id, {
      ...req.body,
    });
  } else {
    var fileBase64 = req.file.buffer.toString("base64");
    await Item.findByIdAndUpdate(id, {
      ...req.body,
      imageCode: fileBase64,
    });
  }

  const success = "Item modified successfully.";
  res.redirect(`/items/${id}?success=${success}`);
};

//Delete Record
exports.delete = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndUpdate(id, {
    status: "Deleted",
  });

  const success = "Item deleted successfully.";
  res.redirect(`/items?success=${success}`);
};
