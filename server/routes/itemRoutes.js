const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('',itemController.root);
router.get('/items',itemController.list);


module.exports = router;