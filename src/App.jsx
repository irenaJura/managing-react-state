import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from './Products';
import { Routes, Route } from 'react-router-dom';
import Detail from './Detail';
import Cart from './Cart';

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(id, sku) {
    setCart((items) => {
      const itemInCart = items.find(i => i.sku === sku);
      if (itemInCart) {
        //return a new array with matching item replaced
        return items.map((i) => i.sku === sku ? { ...items, quantity: i.quantity + 1 } : i)
      } else {
        // return new array with the new item appended
        return [...items, { id, sku, quantity: 1 }]
      }
    })
  }

  return (
    <React.Fragment>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
