import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./Nav";
 import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Footerr";
const ProductId = () => {
  
const { id } = useParams();
const [Product, setProduct] = useState(null);


useEffect(() => {
fetch(`http://localhost:3100/api/products/${id}`).then(response => response.json())
.then(data => setProduct(data))
.catch(err => console.log(err));
}, [id]);

return(
<>
<Navbar />
  <h1> hii product</h1>
  <div>
  
</div>
<Footer/>
 </>   
);
}

export default ProductId;