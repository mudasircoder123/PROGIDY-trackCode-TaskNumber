const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For hashing passwords

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Login', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const userModel = mongoose.model('users', userSchema);

app.post('/login',(req,res) => {
  const{name,email,password} = req.body;
   userModel.findOne({email})
  .then(user => {
   if(user){
    if(user.password === password){
    res.json('login sucessfull');
    }
  else{
  res.json('incorrect password');
  }
  }
  res.json('no user found');
  });
  
  }
  );

const PORT = 3600;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});