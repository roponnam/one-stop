import React, { useState } from 'react';
import products from './data/products';
import promotions from './data/promotions';
import ProductCard from './components/productcard';
import PromotionCard from './components/promotioncard';
import Cart from './components/cart';
import Checkout from './components/checkout';
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app-wrapper">
      <Container>
        <h1 className="my-4 text-center text-danger">OneStop Gas Station</h1>
        <h3 className="text-center text-primary">Fuel, Snacks, and More!</h3>
        {!showCheckout ? (
          <>
            <h4 className="mt-5 text-center">Our Products</h4>
            <Row>
              {products.map((product) => (
                <Col key={product.id} md={4} className="mb-4">
                  <ProductCard product={product} onAddToCart={addToCart} />
                </Col>
              ))}
            </Row>
            <h4 className="mt-5 text-center">Current Promotions</h4>
            <Row>
              {promotions.map((promo) => (
                <Col key={promo.id} md={6} className="mb-4">
                  <PromotionCard promotion={promo} />
                </Col>
              ))}
            </Row>
            <Cart cartItems={cart} onCheckout={handleCheckout} />
            {cart.length > 0 && (
              <div className="text-center mt-3">
                <Button variant="secondary" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            )}
          </>
        ) : (
          <Checkout cartItems={cart} />
        )}
        <div className="instagram-section">
          <h4>Follow Us on Instagram!</h4>
          <p>
            Follow our Instagram page and get a <strong>free shot</strong> in the store!
          </p>
          <a
            href="https://www.instagram.com/your-instagram-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            @your-instagram-page
          </a>
        </div>
      </Container>
    </div>
  );
}

export default App;