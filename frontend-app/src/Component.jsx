import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Component = () => {
return(
<>

<Navbar expand="lg" style={{height:'100px',backgroundColor:'black',margin:'0p',padding:'0px'}}>
      <Container fluid>
        <Navbar.Brand href="#"  style={{fontFamily:'sans-serif',fontSize:'30px',marginLeft:'46px',color:'#fff'}} >welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{fontFamily:'sans-serif',fontSize:'30px',marginLeft:'46px',color:'#fff'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{fontFamily:'sans-serif',fontSize:'30px',marginLeft:'46px',color:'#fff'}}>About</Nav.Link>
        
            <Nav.Link href="#" style={{fontFamily:'sans-serif',fontSize:'30px',marginLeft:'46px',color:'#fff'}}>
              Services
            </Nav.Link>
            <Nav.Link href="#" style={{fontFamily:'sans-serif',fontSize:'30px',marginLeft:'46px',color:'#fff'}}>
              Contact
            </Nav.Link>
            <Nav.Link href="#" style={{fontFamily:'sans-serif',fontSize:'30px',marginLeft:'46px',color:'#fff'}}>
              Achievements
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{marginRight:'45px'}}
            />
            <Button variant="outline-success" > Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1>welcome to my webpage</h1>
</>
);
}
export default Component;