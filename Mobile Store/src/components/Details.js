import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Details.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Details(props) {
  const location = useLocation()
  return (
    <div className='details-class' >
    <div className='col-5'>
    <img src={location.state.from.img}></img>
    </div>
    <div className='col-6 info-class'>
      <h3 style={{textAlign:'center',color:'teal'}}>Model: {location.state.from.title}</h3>
      <div>
      <p>Details: {location.state.from.info}</p>
      <p>Price: ${location.state.from.price}</p>
      </div>
      <div className='detail-button'>
        <button onClick={()=>props.AddToCart(location.state.from.id)}>Add to Cart</button>
        <Link to="/">
          <button>show more productsx</button>
        </Link>
      </div>
    </div>
      
    </div>
  )
} 

export default Details
