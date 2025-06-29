import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCart } from './CartContext'; // Import the useCart hook

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [deliveryCharges] = useState(5.00);
    const [subtotal, setSubtotal] = useState(0);
    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        updateSubtotal(storedCart);
    }, []);

    // Update subtotal calculation
    const updateSubtotal = (cartItems) => {
        const newSubtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
        setSubtotal(newSubtotal);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        alert('Checkout successful!');
    };

    const total = subtotal + deliveryCharges;

    return (
        <Container>
            <h2 className="my-4">Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty. Please add items to your cart before checking out.</p>
            ) : (
                <>
                    <Row>
                        <Col md={6}>
                            <h4>Order Summary</h4>
                            {cart.map((item, index) => (
                                <div key={index}>
                                    <p><strong>{item.title}</strong> - {item.price}</p>
                                </div>
                            ))}
                            <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                            <h5>Delivery Charges: ${deliveryCharges.toFixed(2)}</h5>
                            <h5>Total: ${total.toFixed(2)}</h5>
                        </Col>
                        <Col md={6}>
                            <h4>Shipping Information</h4>
                            <Form onSubmit={handleCheckout}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your address" required />
                                </Form.Group>

                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your city" required />
                                </Form.Group>

                                <Form.Group controlId="formZip">
                                    <Form.Label>ZIP Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your ZIP code" required />
                                </Form.Group>

                                <Form.Group controlId="formPaymentMethod">
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Control as="select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                                        <option value="creditCard">Credit/Debit Card</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="cashOnDelivery">Cash on Delivery</option>
                                    </Form.Control>
                                </Form.Group>
                                <br />
                                <Button variant="primary" type="submit">
                                    Complete Checkout
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default Checkout;
