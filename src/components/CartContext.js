import React, { createContext, useContext, useState } from 'react';

// Create a CartContext
const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
