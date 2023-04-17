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

  const backCatalogo = () => {
    navigate("/catalogo")
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
      <button className='btnBack' onClick={backCatalogo}>
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
        <span>Seguir comprando</span>
      </button>
    </div>
  );
};
