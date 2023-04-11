import React, { Fragment } from 'react'
import "./ItemCardComponent.css"
import { Link } from 'react-router-dom';/* 
import { products } from './products'; */
import Loader from '../Loader/Loader';
import { doc, getDoc, getFiresore } from "firebase/firestore"

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

export function ItemCard() {
    /* const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        // Emulate a delayed network request
        setTimeout(() => {
            setItems(products);
            setIsLoading(false);
        }, 4000);

    }, []); */

    const [productsData, setProductsData] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection)
            .then((items) => {
                if (items.length === 0) {
                    console.log("No products");
                }

                setProductsData(
                    items.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );

                setItems(productsData);
            })
            .catch((err) => console.log(err))
            .then(() => {
                setLoading(false);
            });
    }, []);



    return isLoading ? (
        <Loader />
    ) : (
        <Fragment>
            {productsData.map(items => (
                <Link to={`/item/${items.id}`}><div className="customCard" key={items.id}>
                    <img src={items.img} className="customCard-img" alt="" />
                    <div className="customCard-info">
                        <p className="text-title">{items.nombre.toUpperCase()}</p>
                        <p className="text-body">{items.categoria}</p>
                    </div>
                    <div className="customCard-footer">
                        <span className="text-title">${items.precio}</span>
                    </div>
                </div></Link>
            ))}
        </Fragment>
    )
}







