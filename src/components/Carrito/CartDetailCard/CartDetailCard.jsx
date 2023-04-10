import React from "react";
import styles from "./CartDetailCard.module.css";

export const CartDetailCard = ({ product, qty }) => {
  return (
    <div className={styles.cardsWrapper}>
      {product.activo && (
        <div className={styles.itemWrapper}>
          <div>
            <img src={product.imagen} alt={product.nombre} />
          </div>
          <div className={styles.productInfo}>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <p>Cantidad: {qty.qty}</p>
          </div>
        </div>
      )}
    </div>
  );
};
