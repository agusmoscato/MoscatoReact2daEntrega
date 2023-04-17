import React, { createContext, useState } from "react";

//Creamos el contexto para el carrito de compras

export const CartContext = createContext();

// Creamos el provider de nuestro context como un componente HOC el cual recibirá un children

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState({ qtyItems: 0, products: [] });

  const updateItemQty = (productId, qty) => {
    const updatedProducts = itemCount.products.map((product) =>
      product.productId === productId ? { ...product, qty } : product
    );

    const updatedTotalQty = updatedProducts.reduce(
      (acc, curr) => acc + curr.qty,
      0
    );

    setItemCount({
      qtyItems: updatedTotalQty,
      products: updatedProducts,
    });
  };

  return (
    <CartContext.Provider
      value={{
        itemCount,
        setItemCount,
        updateItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};