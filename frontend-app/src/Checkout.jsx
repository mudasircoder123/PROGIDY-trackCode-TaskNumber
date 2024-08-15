import React from "react";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckOut =() => {
const cartItems = useSelector(state => state.cart.cart)
return(
<>
<h1> hii checkout page</h1>
<div>
{ cartItems.map(items => (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={items.image} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>{items.description}</Card.Text>
        <Button variant="primary">buy Now</Button>
      </Card.Body>
    </Card>
))}
</div>
</>
);
}

export default CheckOut;