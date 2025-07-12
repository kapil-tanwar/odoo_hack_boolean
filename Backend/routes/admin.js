const express = require('express');
const { User, Product } = require('../models');
const auth = require('../middleware/auth');

const router = express.Router();

// Middleware to check admin
function isAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
}

// Get all users
router.get('/users', auth, isAdmin, async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

// Delete user
router.delete('/users/:id', auth, isAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// Update user (admin)
router.put('/users/:id', auth, isAdmin, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { name, email, role } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  if (role) user.role = role;
  await user.save();
  res.json(user);
});

// Get all products
router.get('/products', auth, isAdmin, async (req, res) => {
  const products = await Product.find().populate('owner', 'name email');
  res.json(products);
});

// Delete product
router.delete('/products/:id', auth, isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

// Update product (admin)
router.put('/products/:id', auth, isAdmin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  const { title, description, price, status } = req.body;
  if (title) product.title = title;
  if (description) product.description = description;
  if (price) product.price = price;
  if (status) product.status = status;
  await product.save();
  res.json(product);
});

module.exports = router; 