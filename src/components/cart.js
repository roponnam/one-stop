import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="bg-danger text-white">Your Cart</Card.Header>
      <ListGroup variant="flush">
        {cartItems.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer>
        <h5>Total: ${total.toFixed(2)}</h5>
        <Button variant="danger" className="w-100" onClick={onCheckout}>
          Proceed to Checkout
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default cart;