import React, { useContext } from "react";
import "../Cart.css";
import { CartContext } from "../../../context/cartContext";

export const CartDetailCard = ({ product, qty }) => {

  const { updateItemQty } = useContext(CartContext);
  const { itemCount, setItemCount } = useContext(CartContext);

  const handleAddClick = () => {
    updateItemQty(product.id, qty.qty + 1);
  };

  const handleRemoveClick = () => {
    if (qty.qty > 0) {
      updateItemQty(product.id, qty.qty - 1);
    }
  };

  const deleteProduct = () => {
    if (!itemCount.products) {
      return;
    }
    const updatedProducts = itemCount.products.filter(
      (p) => p.productId !== product.id
    );
    const deletedProduct = itemCount.products.find(
      (p) => p.productId === product.id
    );
    if (deletedProduct) {
      const deleteQty = deletedProduct.qty;
      setItemCount((prevState) => ({
        qtyItems: prevState.qtyItems - deleteQty,
        products: updatedProducts,
      }));
    }    
  };

  if (!qty) {
    return null;
  }

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={deleteProduct} className="customCard-button countBtn">Eliminar Producto</button>
            <button onClick={handleRemoveClick} className="customCard-button countBtn">-</button>
            <span className="text-title">Cantidad: {qty.qty}</span>
            <button onClick={handleAddClick} className="customCard-button countBtn">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
