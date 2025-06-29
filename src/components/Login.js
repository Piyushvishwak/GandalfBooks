import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/login`,
                { email, password },
                { withCredentials: true }
            );
            setLoading(false);

            if (response.data.message === 'Login successful') {
                navigate('/'); // Redirect to homepage
            } else {
                setError(response.data.message || 'Something went wrong');
            }
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || 'Invalid email or password');
        }
    };

    return (
        <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
            <h3>Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Form.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                        {showPassword ? 'Hide Password' : 'Show Password'}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
