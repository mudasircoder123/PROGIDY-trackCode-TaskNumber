import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp() {
const[email,setEmail] = useState('');
const[password,setPassword] = useState('');

const navigate = useNavigate();
const submit = (e) => {
e.preventDefault();
if (email === '' || password === '') {
  alert('All fields are required');
  return;
}
try{
axios.post('http://localhost:5000/login', { email, password })
alert('login successfull')
navigate('/employees')
}catch(err){
alert('something went wrong');
}

}

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password}  onChange={(e) =>setPassword(e.target.value)}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={submit}>Login</MDBBtn>
       
              <Link to='/'><p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p></Link>

              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;