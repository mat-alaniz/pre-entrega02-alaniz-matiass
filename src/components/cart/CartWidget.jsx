import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../useContext/cartContext';
import './CartWidget.css';

const CartWidget = () => {
const {totalItems} = useCart();

if(totalItems === 0) return null;

  return (
    <Link to="/cart" className="cart-widget">
      <span role='img' aria-label='cart'></span>
      <span className='cart-count'>{totalItems}</span>
    </Link>
  )
}

export default CartWidget