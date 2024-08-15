const express = require('express');
const { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } = require('./controller');

const router = express.Router();

router.post('/employees', createEmployee);
router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;
