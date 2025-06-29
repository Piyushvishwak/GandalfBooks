// src/components/Footer.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2C3E50', color: '#F5F5DC', paddingTop: '20px', paddingBottom: '20px' }}>
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5>About Us</h5>
                        <p>
                            Bookstore is your one-stop destination for discovering, buying, and reviewing books. 
                            Our mission is to foster a love for reading and connect readers with their favorite authors.
                        </p>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Quick Links</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/about" style={{ color: '#F5F5DC', textDecoration: 'none' }}>About</a></li>
                            <li><a href="/contact" style={{ color: '#F5F5DC', textDecoration: 'none' }}>Contact</a></li>
                            <li><a href="/faq" style={{ color: '#F5F5DC', textDecoration: 'none' }}>FAQs</a></li>
                            <li><a href="/terms" style={{ color: '#F5F5DC', textDecoration: 'none' }}>Terms of Service</a></li>
                            <li><a href="/PrivacyPolicy" style={{ color: '#F5F5DC', textDecoration: 'none' }}>Privacy Policy</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Stay Updated</h5>
                        <p>Subscribe to our newsletter for the latest book releases and offers.</p>
                        <Form>
                            <Form.Group controlId="formNewsletter" className="d-flex">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{ borderRadius: '0', marginRight: '10px' }}
                                />
                                <Button variant="light" style={{ borderRadius: '0', backgroundColor: '#F5F5DC', color: '#2C3E50' }}>
                                    Subscribe
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <hr style={{ borderColor: '#F5F5DC' }} />
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2024 Bookstore. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
