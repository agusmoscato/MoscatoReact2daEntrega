import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./FormularioNewProduct.css";

export const FormularioNewProduct = () => {
    const [objeto, setObjeto] = useState({
        nombre: "",
        img: "",
        categoria: "",
        precio: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setObjeto((prevObjeto) => ({ ...prevObjeto, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const productCollection = collection(db, "items");
        addDoc(productCollection, objeto)
            .then(({ id }) => {
                console.log(id);
                setObjeto({
                    nombre: "",
                    img: "",
                    categoria: "",
                    precio: 0,
                });
                alert("Producto cargado con exito");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    const categorias = [
        "aperitivos", "cervezas", "bebidas-blancas", "gaseosas", "Combos"
    ]

    return (
        <div style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="card">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    <form onSubmit={handleSubmit} className="form">
                        <span className="signup">Crear nuevo articulo</span>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={objeto.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="form--input"
                            required
                        />
                        <select
                            id="categoria"
                            name="categoria"
                            value={objeto.categoria}
                            onChange={handleChange}
                            className="form--input"
                            required
                        >
                            <option value="">Categoria</option>
                            {categorias.map((categorias, index) => (
                                <option key={index} value={categorias}>
                                    {categorias}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            id="img"
                            name="img"
                            value={objeto.img}
                            onChange={handleChange}
                            placeholder="Img"
                            className="form--input"
                            required
                        />
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            value={objeto.precio}
                            onChange={handleChange}
                            placeholder="Precio"
                            className="form--input"
                            required
                        />
                        <button type="submit" className="form--submit">Subir objeto</button>
                    </form>
                </div>
            </div>
        </div>


    );
};
