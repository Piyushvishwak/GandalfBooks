import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      setSuccess(response.data.message);
      setError('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error registering user:', err.response ? err.response.data : err.message);
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
      <h3>Register</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

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
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <div className="mt-3 text-center">
        <p>
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
            Go to Login
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default Register;
