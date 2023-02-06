import React, { useState, createContext, useContext } from 'react'
import Title from './Title'
import Product from './Product'
import {storeProducts} from "../data"
import { Link } from 'react-router-dom'
import Details from './Details'
import {Routes, Route, useNavigate} from 'react-router-dom'


function ProductList(props) {

  const products = props.products;

  



  return (
    <React.Fragment>
      <div className="py5">
        <div className="container">
          <Title
          name="our"
          title="products"/>
           <div className="row">
           {products.map(product => {return <Product
            key= {product.id}
            id={product.id}
            title= {product.title}
            img={product.img}
            price={product.price}
            info={product.info}
            AddToCart= {props.AddToCart}
           />})}
           </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductList
