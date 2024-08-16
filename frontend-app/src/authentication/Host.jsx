import React from "react";
import { useNavigate } from "react-router-dom";
import './Host.css';
const Host = () => {
const navigate = useNavigate();

const handleClick = () => {
navigate('/register');
}
return(
<>
<h1> welcome to my webpage</h1>
<div >
<h2>Click here to register details</h2>

<button onClick={handleClick} style={{backgroundColor:'green',width:'80px',height:'35px'}}>Click</button>
</div>
</>
);
}
export default Host;