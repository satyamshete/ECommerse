
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import {storeProducts} from "../src/components/data"

function App() {
  const allProducts = storeProducts
  function addToCart(id) {
    const objIndex = allProducts.findIndex((item => item.id == id))
    allProducts[objIndex].count = allProducts[objIndex].count +1
    allProducts[objIndex].total = allProducts[objIndex].count * allProducts[objIndex].price
    
   }



  return (
    <React.Fragment>
    <Navbar />
      <Routes>
      <Route exact path='/' element= {<ProductList
      products={allProducts}
      AddToCart= {addToCart}
       />}></Route>
      
      <Route exact path='/details' element= {<Details
      products={allProducts}
      AddToCart= {addToCart}
       />}></Route>  
      <Route exact path='/cart' element= {<Cart
      products={allProducts}
       />}></Route>
      <Route path="*" element={<Default />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
