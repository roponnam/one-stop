import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button variant="danger" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;