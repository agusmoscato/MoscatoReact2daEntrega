import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { FiltersBtn } from "./FiltersBtn"
import Loader from "../Loader/Loader"

import { query, collection, where, getDocs, getFirestore } from "firebase/firestore";

export function FilterItems() {


    const { productCategory } = useParams();
    const [productData, setProductData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    React.useEffect(() => {
        const db = getFirestore();
        const itemsCollectionFiltered = query(
            collection(db, "items"),
            where("categoria", "==", productCategory),
        );
        getDocs(itemsCollectionFiltered)
            .then((products) => {
                console.log(products);
                if (products.length === 0) {
                    setError(true);
                }
                setProductData(
                    products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            })
            .catch((err) => console.log(err))
            .then(() => setLoading(false));
        console.log(productCategory);
    }, [productCategory]);

    return loading ? <Loader /> : (
        <Fragment>
            <h1 style={{ marginTop: '30px', textAlign: 'center', fontFamily: 'fantasy', letterSpacing: '7px', fontSize: '35px' }}>{productCategory.toUpperCase()}</h1>
            <FiltersBtn />
            <div id='shopContent' style={{ minHeight: '80vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {productData.map(items => (
                    <div className="customCard" key={items.id}>
                        <Link to={`/item/${items.id}`}><img src={items.img} className="customCard-img" alt="" /></Link>
                        <div className="customCard-info">
                            <p className="text-title">{items.nombre.toUpperCase()}</p>
                            <p className="text-body">{items.categoria}</p>
                        </div>
                        <div className="customCard-footer">
                            <span className="text-title">${items.precio}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

