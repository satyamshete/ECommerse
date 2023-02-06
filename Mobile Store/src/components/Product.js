import React, { useState } from 'react'
import './Product.css'
import styled from "styled-components"
import Details from './Details'
import { useNavigate, useNavigation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
// import { View, Button } from 'react-native'
function Product(props) {
  const itemDetails= {
    id: props.id,
    img: props.img,
    title: props.title,
    info:props.info,
    price:props.price
  }
  // let navigation = useNavigation(); 
  // const routeChange = () =>{ 
  //   let path = `/Details`; 
  //   navigate(path);
  // }
  
  return (

      <div className='mx-auto my-2 templte'>
          <div>
              <Link to="/details" state={{ from: itemDetails }}>
                <img src={props.img} alt="Hello" />
                </Link>
                {/* <Button color="primary" className="px-4"
                  onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}>
                  <img src={props.img} alt="image not found" />
                </Button> */}
                <button onClick={()=>props.AddToCart(props.id)} className='hide'><i className='fas fa-cart-plus'/></button>
          </div>
            <div className="template-title">
                <p>{props.title}</p>
                <p>${props.price}</p>
            </div>    
        </div>
    
  )
}


export default Product