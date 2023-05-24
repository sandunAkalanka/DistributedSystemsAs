const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.get('/items',itemController.getAllItems);
router.post('/items',itemController.createItem);

module.exports = router;