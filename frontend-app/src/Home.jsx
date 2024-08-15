import React, { useState,useEffect } from "react"; 
import Navbar from "./Nav";
import axios from 'axios';
import Footer from './Footerr';
import './home.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "./redux/cartSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {

const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);

const dispatch = useDispatch();

    useEffect(() => {
       axios.get('http://localhost:3100/api/products')
        .then(response => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching the products:', error);
          setLoading(false);
        });
    }, []);
   
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
    <>
    <Navbar/>
  <h2>welcome to my homepage</h2>
    <div className="container">
{products.map(product => (
        <Card style={{ width: '325px',backgroundColor:'#f0f0f0',borderRadius:'8px',margin:'20px',height:'auto'}} >
          <Link to={`/products/${product.id}`}>
        <Card.Img variant="top" src={product.image}style={{height:'250px',width:'300px',marginLeft:'12px'}} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>{product.category}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" onClick={ () => dispatch(addtoCart(product))}>add to Cart</Button>
        </Card.Body>
      </Card>
 ))}
      </div>
  <Footer/>
  
        </>
      );
    }
export default Home;