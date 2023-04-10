import React from 'react'
import styles from "./CartPaymentDetails.module.css"
export const CartPaymentDetails = ({total, onClick}) => {
  return (
    <div className={styles.paymentDetails}>
        <span className={styles.total}>Total a pagar: ${total}</span>
        <button onClick={onClick} className={styles.continueButton}>Continuar</button>
    </div>
  )
}
