import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";

const styles = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
    },
};

export const Checkout = () => {
    const [loading, setLoading] = React.useState(false);

    const { itemCount } = React.useContext(CartContext);
    const navigate = useNavigate();

    const location = useLocation();
    const total = location.state;
    const handleSubmit = (e) => {
        e.preventDefault();
        //Para ver los datos ingresados
        const name = e.target.name.value;
        const cardNumber = e.target.cardNumber.value;
        const expirationDate = e.target.expirationDate.value;
        const cvc = e.target.cvc.value;

        console.log("Nombre en la tarjeta:", name);
        console.log("Número de tarjeta:", cardNumber);
        console.log("Fecha de vencimiento:", expirationDate);
        console.log("Código de seguridad (CVC):", cvc);
        console.log("Total a pagar:", total);

        setLoading(true);

        const newProduct = {
            nombre: name,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            cvc: cvc,
            total: total,
            products: itemCount, //Ids y cantidades
        };
        const db = getFirestore();
        const productCollection = collection(db, "ventas");
        addDoc(productCollection, newProduct)
            .catch((err) => console.log(err))
            .then(() => setLoading(false));

        setTimeout(() => {
            navigate("/");
        }, 3000);
    };
    return (
        <div style={styles.container} fluid>
            <form onSubmit={handleSubmit} className="form">
                <span className="signup">Formulario de pago</span>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    className="form--input"
                    required
                />
                <input
                    id="cardNumber"
                    type="text"
                    pattern="[0-9]{16}"
                    placeholder="1234 5678 9012 3456"
                    className="form--input"
                    required
                />
                <input
                    id="expirationDate"
                    type="month"
                    className="form--input"
                    required
                />
                <input
                    id="cvc"
                    type="text"
                    pattern="[0-9]{3}"
                    placeholder="123"
                    className="form--input"
                    required
                />

                <button
                    variant="primary"
                    type="submit"
                    className="form--submit"
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        `Pagar $${total}`
                    )}
                </button>
            </form>

        </div>
    );
};