const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { getAllProducts} = require('./products');

const app = express();
const port = 3100;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Signup')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('users', userSchema);

// Routes
app.post('/login', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json('Login successful');
      } else {
        res.status(400).json('Incorrect password');
      }
    } else {
      res.status(404).json('No user found');
    }
  } catch (err) {
    res.status(500).json('Server error');
  }
});

// Products API Endpoints
app.get('/api/products', (req, res) => {
  try {
    const products = getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
});

app.get('/api/products/:id', (req, res) => {
const productId = req.params.id;
const product  = products.find(p => p.id === productId);
if(product){
  res.json(product);
}
  else{
  res.status(404).json({err:'product not found'})
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
