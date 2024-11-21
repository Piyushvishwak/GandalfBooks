import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from './CartContext'; // Import the useCart hook

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Access cart and removeFromCart from context
    const navigate = useNavigate(); // Use useNavigate for navigation
    const subtotal = cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0); // Remove $ sign for calculation

    return (
        <Container>
            <h2 className="my-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <Row>
                        {cart.map((item, index) => (
                            <Col key={index} md={2} className="mb-4">
                                <Card style={{ height: '400px' }}>
                                    <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text><strong>Author:</strong> {item.author}</Card.Text>
                                        <Card.Text><strong>Price:</strong> {item.price}</Card.Text>
                                        <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                        </Col>
                        <Col md={6} className="text-right">
                            <Button variant="success" onClick={() => navigate('/checkout')}>Checkout</Button>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default Cart;
