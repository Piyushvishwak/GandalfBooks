import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';  // Import user icon

const Header = ({ username }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmedSearchTerm = searchTerm.trim();
        if (trimmedSearchTerm) {
            navigate(`/products?search=${trimmedSearchTerm}`);
            setSearchTerm('');
        }
    };

    const handleCategorySelect = (category) => {
        navigate(`/products?category=${category}`);
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleNotificationClick = () => {
        navigate('/notifications');
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <Navbar className="custom-navbar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Bookstore Logo"
                        style={{ width: '150px', marginRight: '10px', borderRadius: '75px' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px', color:'#283618' }}>
                            Home
                        </NavLink>
                        <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px', color:'#283618' }}>
                            Products
                        </NavLink>
                        <NavDropdown title={<span style={{ color: '#283618' }}>Categories</span>} id="basic-nav-dropdown" style={{ marginRight: '20px', color:'#283618' }}>                           <NavDropdown.Item onClick={() => handleCategorySelect('fiction')}style={{ color: '#283618' }}>Fiction</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('non-fiction')}style={{ color: '#283618' }}>Non-Fiction</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('sci-fi')}style={{ color: '#283618' }}>Sci-Fi</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('romance')}style={{ color: '#283618' }}>Romance</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('fantasy')}style={{ color: '#283618' }}>Fantasy</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('mystery')}style={{ color: '#283618' }}>Mystery</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('thriller')}style={{ color: '#283618' }}>Thriller</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleCategorySelect('dystopian')}style={{ color: '#283618' }}>Dystopian</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px' , color: '#283618'}}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ marginRight: '20px' , color:'#283618'}}>
                            Contact
                        </NavLink>
                    </Nav>

                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search Books"
                            className="me-3"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid',
                            borderColor: '#283618',
                            borderRadius: '5px',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            width: '70px',
                        }} onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5rem', color: '#283618'}} />
                        </div>
                    </Form>

                    {/* Cart Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                        onClick={handleCartClick}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.8rem', color: '#283618'}} />
                    </div>

                    {/* Notification Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                        onClick={handleNotificationClick}
                    >
                        <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.8rem', color: '#283618'}} />
                    </div>

                    {/* Profile Icon and Username Dropdown */}
                    <NavDropdown
                        title={<FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '1.8rem', color: '#283618'}} />}
                        id="profile-nav-dropdown"
                        align="end"
                        style={{ marginLeft: '15px' }}  // Increased margin to move the profile icon to the right
                    >
                        {username ? (
                            <>
                                <NavDropdown.ItemText>{`Hello, ${username}`}</NavDropdown.ItemText>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </>
                        ) : (
                            <>
                                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                            </>
                        )}
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
