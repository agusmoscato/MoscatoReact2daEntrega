import React, { useContext } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";
import { CartDetailCard, CartPaymentDetails } from "../Carrito";
import Loader from "../Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css"

//Esta función crea las referencias de los productos utilizando los IDs del itemCount.
//Una vez hecho eso, con Promise.all,
//devuelve el array resultante de ejecutar todas las llamadas segun la cantidad de productos (ids) agregados al carrito
const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const productRefs = ids.map((id) => doc(collection(db, "items"), id));

  const productSnapshots = await Promise.all(
    productRefs.map((productRef) => getDoc(productRef))
  );

  // Aqui hacemos el return de los productos y verificamos que exista, podemos usar length también. Se puede mejorar
  const products = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });

  return products.filter((product) => product !== null);
};

const styles = {
  cartWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
  },
  productCardDetail: {
    width: "60%",
  },
};

export const Cart = () => {
  const [error, setError] = React.useState(false);
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { itemCount } = useContext(CartContext);
  React.useEffect(() => {
    const ids = itemCount.products.map((product) => product.productId);
    fetchProductsByIds(ids)
      .then((res) => setProductsData(res))
      .catch((err) => setError(err))
      .then(() => setLoading(false));
  }, [itemCount.products]);

  //Función complementaria para poder encontrar el id según el id enviado en el calculo del total
  const findQtyByProductId = (productId) => {
    const item = itemCount.products.find(
      (item) => item.productId === productId
    );
    return item ? item.qty : 0;
  };

  //Calcula el total macheando el id de productsData con itemCount para respetar las cantidades
  const total = productsData
    .map((product) => product.precio * findQtyByProductId(product.id))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout", { state: total });
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="cartWrapper">
      <div className="productCardDetail">
        {productsData.map((product) => (
          <CartDetailCard
            key={product.id}
            product={product}
            qty={itemCount.products.find(
              (item) => item.productId === product.id
            )}
          />
        ))}
      </div>
      <div>
        <CartPaymentDetails total={total} onClick={handleCheckoutClick} />
      </div>
    </div>
  );
};
