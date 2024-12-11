const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", itemController.list);
router.get("/new-item", itemController.addItemForm);
router.post("/", upload.single("file"), itemController.create);
router.get("/:id", itemController.show);
router.get("/:id/edit", itemController.editItemForm);
router.put("/:id", upload.single("file"), itemController.update);
router.delete("/:id", itemController.delete);

module.exports = router;
