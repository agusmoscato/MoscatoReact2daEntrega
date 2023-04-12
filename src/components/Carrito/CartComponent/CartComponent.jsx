import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "../Cart.css"
import { CartContext } from '../../../context/cartContext'


export const CartComponent = () => {

  const {itemCount} = useContext(CartContext);
      console.log(itemCount);
      console.log(itemCount.qtyItems);

  return (
      <Link to={"/cart"}>
        <div className="cartContainer">
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <span className="itemCount">{itemCount.qtyItems}</span>
        </div>
      </Link>
      )
}
