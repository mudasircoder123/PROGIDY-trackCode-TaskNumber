
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './registration.css';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('All fields are required');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3400/register', { name, email, password });
      alert('Registration successful');
      navigate('/signup');
    } catch (err) {
      console.log(err);
      alert('account already exists')
    }
  
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      
      <MDBCard className='m-5' style={{ width: '500px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">CREATE AN ACCOUNT</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'autoComplete='off'  value={name} onChange={(e) => setName(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree to all statements in the Terms of service' />
            </div>
            <h5><Link to='/signup'>Already have an account?</Link></h5>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Registration;


