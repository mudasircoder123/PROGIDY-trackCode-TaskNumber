import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';

const DeleteEmployee = () => {
  const { id } = useParams();

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/employees/${id}`)
      .then(() => {
        alert('Employee deleted successfully');
        window.location = '/employees';  // Redirect to home after deletion
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="my-4 text-center">Delete Employee</h2>
          <Alert variant="danger">
            Are you sure you want to delete this employee? This action cannot be undone.
          </Alert>
          <Button variant="danger" onClick={handleDelete} className="w-100">
            Delete Employee
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DeleteEmployee;

