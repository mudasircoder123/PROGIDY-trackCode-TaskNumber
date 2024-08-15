import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/employees')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="my-4 text-center">Employee List</h2>
          <ListGroup>
            {employees.map((employee) => (
              <ListGroup.Item key={employee._id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{employee.name}</strong> <br />
                  {employee.position} - {employee.department}
                </div>
                <div>
                  <Link to={`/update/${employee._id}`}>
                    <Button variant="primary" size="sm" className="mr-2">Edit</Button>
                  </Link>
                  <Link to={`/delete/${employee._id}`}>
                    <Button variant="danger" size="sm">Delete</Button>
                  </Link>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="text-center mt-4">
            <Link to="/add">
              <Button variant="success">Add New Employee</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeList;


   