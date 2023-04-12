import React from 'react'
import "../Cart.css"
export const CartPaymentDetails = ({total, onClick}) => {
  return (
    <div className="paymentDetails">
        <span className="total">Total a pagar: ${total}</span>
        <button onClick={onClick} className="continueButton">Continuar</button>
    </div>
  )
}
