import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './update.css';
const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
  });
const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee); // Debugging line
    axios.put(`http://localhost:5000/api/employees/${id}`, employee)
      .then((response) => {
        console.log(response.data);
        navigate('/employees');
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="my-4 text-center">Update Employee</h2>
          <Form onSubmit={handleSubmit}>
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
              <Form.Label className='label'> Position</Form.Label>
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

            <Button variant="primary" type="submit" className="w-40 mt-3">
              Update Employee
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateEmployee;


