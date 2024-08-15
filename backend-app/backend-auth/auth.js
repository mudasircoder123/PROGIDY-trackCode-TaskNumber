const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Register', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Define a schema 
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const userModel = mongoose.model('users', userSchema);

// POST /register endpoint to register a user 
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (name === '' || email === '' || password === '') {
        return res.status(400).send('All fields are required');
    }
    try {
        // Check if user with the same email already exists
        let existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User with this email already exists');
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Server error');
    }
});

// POST /login endpoint to login a user
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email === '' || password === '') {
        return res.status(400).send('All fields are required');
    }
    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid email or password');
        }

        res.status(200).json({ message: 'Logged in successfully' });
    } catch (err) {
        console.error('Error logging in user:', err);
        res.status(500).send('Server error');
    }
});

const PORT = 3400;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});