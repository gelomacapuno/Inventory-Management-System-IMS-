const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/',userController.root);
router.get('/items',userController.list);