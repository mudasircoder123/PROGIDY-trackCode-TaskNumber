import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './createEmp.css';
import { useNavigate } from 'react-router-dom';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/employees', employee)
      .then((response) => {
        console.log(response.data);
         navigate('/employees') // Redirect to home after submission
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="my-4 text-center">Add Employee</h2>
          <Form className='form' onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className='label'>Name</Form.Label>
              <Form.Control className='input'
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className='label'>Email</Form.Label>
              <Form.Control className='input'
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPosition">
              <Form.Label className='label'>Position</Form.Label>
              <Form.Control className='input'
                type="text"
                name="position"
                value={employee.position}
                onChange={handleChange}
                placeholder="Enter position"
                required
              />
            </Form.Group>

            <Form.Group controlId="formDepartment">
              <Form.Label className='label'>Department</Form.Label>
              <Form.Control className='input'
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                placeholder="Enter department"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-30 mt-3 ">
              Add Employee
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEmployee;
