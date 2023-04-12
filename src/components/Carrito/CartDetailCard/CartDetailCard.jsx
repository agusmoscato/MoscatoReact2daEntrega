import React from "react";
import "../Cart.css";

export const CartDetailCard = ({ product, qty }) => {
  console.log(product);



  return (
    <div className="cardsWrapper">
      <div className="customCard cartDetail" key={product.id}>
        <img src={product.img} className="customCard-img" alt="" />
        <div className="customCard-info">
          <p className="text-title">{product.nombre.toUpperCase()}</p>
          <p className="text-body">{product.categoria.toUpperCase()}</p>
        </div>
        <div className="customCard-footer">
          <span className="text-title">${product.precio}</span>
          <span className="text-title">Cantidad: {qty.qty}</span>
          </div>
      </div>
    </div>
  );
};
