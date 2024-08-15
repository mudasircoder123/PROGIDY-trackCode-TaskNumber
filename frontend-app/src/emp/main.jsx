import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './App3';
import AddEmployee from './CreateEmployees';
import UpdateEmployee from './Update';
import DeleteEmployee from './delete';
import Register from './Register';
import SignUp from './SignUp';
import './min.css';
function Main() {
  return (
    <Router>
      <div className="App" >
        <Routes>
        <Route path='/' element={<Register/>} />
        <Route path="/login" element={<SignUp/>} />
        
         <Route path='/employees' element={<EmployeeList/>} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
          <Route path="/delete/:id" element={<DeleteEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
