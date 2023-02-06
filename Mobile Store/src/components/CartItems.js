import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {storeProducts} from "../data"
import './CartItems.css'

function CartItems(props) {
    const Couunt = props.products.count
    const [count,setCount] = useState(Couunt)
    const [cartPrice ,setCartPrice] = useState(Couunt)
    props.products.count = count
    props.products.total = props.products.count * props.products.price
    //  console.log(props.products.total);
  
    return (
      <div className='CartItems-class' >
    
            <img src={props.products.img} alt='cart-image not showing'></img>
       
        <div className='cart-count' >
                  <button onClick={() => {setCount(count - 1)
                  props.products.count = count}
                  }>-</button>
                  <p style={{color:'green'}}>{count}</p>
                  <button onClick={() => {setCount(count + 1)
                  }}>+</button>
        </div>
        <div >
          <p>Total value is: ${props.products.total}</p>
        </div>
      </div>
    )
                }
export default CartItems
