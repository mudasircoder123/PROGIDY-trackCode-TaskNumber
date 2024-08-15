const Employee = require('./employeesModel');

// Create new employee 
exports.createEmployee = async (req, res) => {
  const { name, email, position, salary } = req.body;
  try {
    const newEmployee = new Employee({ name, email, position, salary });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all employees 
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get employee by id 
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete employee by id 
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
