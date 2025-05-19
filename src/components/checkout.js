import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const checkout = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    alert('Payment Successful! Thank you for shopping with us.');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow-lg">
            <Card.Header className="bg-danger text-white text-center">
              <h4>Checkout</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {cartItems.map((item, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <h5 className="mt-3 text-center">Total: ${total.toFixed(2)}</h5>
            </Card.Body>
            <Card.Footer>
              <Button variant="danger" className="w-100" onClick={handlePayment}>
                Pay Now
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default checkout;