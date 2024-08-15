import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import './log.css';
const Log = () => {
const navigate = useNavigate('');
  const [email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const Submit = (e) => {
  e.preventDefault();
  try{
    const response = axios.post('http://localhost:3400/login',{email,password}).then(() => {
    console.log('login successful')
  navigate('/component')
    }
    )
    
    }
    catch(err){
    console.log(err)
    }
  }

return(
<>
<MDBContainer fluid>

 <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

   <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your email and password!</p>

<MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>

 <MDBBtn outline className='mx-2 px-5 bg-white' size='lg' onClick={Submit}>Login</MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  
</>
)
}

export default  Log;