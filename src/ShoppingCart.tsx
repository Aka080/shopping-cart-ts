import React from 'react';
import {  Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import {About} from './pages/About';
import {NavBar} from './components/navbar'
import { StoreContextProvider } from './context';
import { CartBox } from './components/cartbox';
import { relative } from 'path';


function ShoppingCart() {
  return (
    <div>
    <StoreContextProvider>

    <NavBar/>
    <CartBox/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
    </Routes>
    
    </StoreContextProvider>

    </div>
  );
}

export default ShoppingCart;
