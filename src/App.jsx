import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert(`${product.name} has been added to the cart!`);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-200 font-sans">
        <Navbar cartCount={cartItems.length} />
        <main className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
