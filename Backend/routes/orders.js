const express = require('express');
const { Order, Product, User } = require('../models');
const auth = require('../middleware/auth');

const router = express.Router();

// Create order (swap/redeem)
router.post('/', auth, async (req, res) => {
  try {
    const { productId, method, points, requesterItem } = req.body;
    const product = await Product.findById(productId).populate('owner');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    const order = await Order.create({
      product: product._id,
      requester: req.user._id,
      owner: product.owner._id || product.owner,
      method,
      points,
      requesterItem,
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create order', error: err.message });
  }
});

// Get all orders (admin)
router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  const orders = await Order.find().populate('product requester owner');
  res.json(orders);
});

// Get my orders
router.get('/my', auth, async (req, res) => {
  const orders = await Order.find({ requester: req.user._id }).populate('product owner');
  res.json(orders);
});

// Update order status (admin/owner)
router.put('/:id', auth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: 'Order not found' });
  if (req.user.role !== 'admin' && req.user._id.toString() !== order.owner.toString()) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  order.status = req.body.status;
  await order.save();
  res.json(order);
});

module.exports = router; 