import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); 
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        updateSubtotal(storedCart);
    }, []);

    const updateSubtotal = (cartItems) => {
        console.log("Cart items:", cartItems); 
        const newSubtotal = cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            console.log("Item price:", price);
            return total + price;
        }, 0);
        setSubtotal(newSubtotal);
        console.log("New subtotal:", newSubtotal);     };
    

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updateSubtotal(updatedCart);
    };

    return (
        <Container>
            <h2 className="my-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <Row>
                        {cart.map((item, index) => (
                            <Col key={index} md={3} className="mb-4">
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