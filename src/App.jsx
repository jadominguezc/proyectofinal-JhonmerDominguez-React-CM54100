import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './components/CartContext'; 
import Brief from './components/Brief'; 

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/brief" element={<Brief />} /> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
