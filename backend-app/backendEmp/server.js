const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));

// Employee Schema and Model
const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
});

const Employee = mongoose.model('employee', EmployeeSchema);

// users schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Changed to String
});

const userModel = mongoose.model('users', userSchema);

// register a user
app.post('/register',async(req,res) => {
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

// login a user
app.post('/login',async(req,res) => {
const{email,password} = req.body;
const user = await userModel.findOne({email});
if(!user){
  return res.status(400).send('User with this email doesn,t exists');
}
const isMatch = bcrypt.compare(user.password,password)
if(!isMatch){
  return res.status(400).send('Invalid email or password');
}
res.status(200).json({ message: 'Logged in successfully' });
})

// Routes
const router = express.Router();

// Create Employee
router.post('/employees', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Employee by ID
router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Employee
router.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Employee
router.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Use the router
app.use('/api', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


