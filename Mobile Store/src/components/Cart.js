import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {storeProducts} from "../data"
import Alert from './Alert';

import CartItems from './CartItems';


function Cart(props) {
  // const Couunt = props.products[0].count
  // const [count,setCount] = useState(Couunt)
  // const cartItems = props.products.filter((item)=>item.count > 0)
  // props.products[0].count = count
  // props.products[0].total = props.products[0].count * props.products[0].price
  // // console.log(cartItems);

  // return (
  //   <div className='col-6 mx-auto my-2' >
  //     <div >
  //         <img src={props.products.img} alt='cart-image not showing'></img>
  //           <div className='cart-count-class'>
  //               <button onClick={() => {setCount(count - 1)
  //               props.products[0].count = count}
  //               }>-</button>
  //               <p style={{color:'green'}}>{count}</p>
  //               <button onClick={() => {setCount(count + 1)
  //               }}>+</button>
  //           </div>
  //     </div>
  //     <div >
  //       <p>Total value is: ${props.products[0].total}</p>
  //     </div>
  //   </div>
  // )
  const[TotalCartValue,setTotalCartValue] = useState(null)
  const cartItems = props.products.filter((item)=>item.count > 0)
  var result= cartItems.reduce(function (acc, obj) { return acc + obj.total; }, 0);

  return(
    <div>
          
            {props.products.map(items => {
              if (items.count > 0){
              return <CartItems
              key={items.id}
                products={items}
              />
              }
            })}
            <p>Total Cart Value is: {result}</p>
            </div>
        
  )
}

export default Cart
