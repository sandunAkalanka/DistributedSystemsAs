const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.get('/orders',orderController.getAllOrders);
router.post('/orders',orderController.createOrder);

module.exports = router;