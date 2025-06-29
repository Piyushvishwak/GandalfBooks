import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import About from './components/About';
import Contact from './components/Contact';
import BookDetails from './components/BookDetail';
import Cart from './components/Cart';
import Slider from './components/slider';
import Notification from './components/Notification';
import Login from './components/Login';
import Register from './components/Register';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/CartContext';
import DiscountBanner from './components/DiscountBanner';
import Checkout from './components/Checkout';

function App() {
  const [username, setUsername] = useState('');

  return (
    <CartProvider>
      <Router>
        <DiscountBanner />
        <Header username={username} />
        <ConditionalSlider />
        <main style={{ backgroundColor: '#dda15e', minHeight: '100vh' }} className="py-4 px-3 px-md-5">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/products" element={<BookList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login onLogin={(name) => setUsername(name)} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

function ConditionalSlider() {
  const location = useLocation();

  return location.pathname === '/' ? <Slider /> : null;
}

export default App;
