import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import '../pages/Cart.css';

import { remove } from '../store/cartSlice'
const Cart = () => {
  const handelRemove=(productId)=>{
    dispatch(remove(productId));

  }
  const dispatch=useDispatch();

  const products=useSelector(state=>state.cart)
  return (
    <div>
      <h4>Cart</h4>

      <div className='cartWrapper'>
        {products.map((product)=>(
            <div key={product.id} className="cartCard">
              <div>
                <img className='cartimg' src={product.image} alt="#" />
              </div>
              <div className="card-descriptions">
                <h6>{product.title}</h6>
                <h6>{`Price: ${product.price}`}</h6>
              </div>
              <div>
                <button className="btnn" onClick={()=>handelRemove(product.id)}>Remove</button>
              </div>
            </div>
        ))

        }

      </div>
    </div>
  )
}

export default Cart