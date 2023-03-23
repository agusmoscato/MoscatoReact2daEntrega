import React, { Fragment } from 'react'
import ItemCount from "./ItemCount"
import "./ItemCardComponent.css"
import { products } from './products';
import { useParams } from 'react-router-dom';
import { Navbar } from '../NavbarComponent/Navbar';


export function ItemDetail() {

    const {productId} = useParams();
    const producto = products.find((p) => p.id === parseInt(productId));
    if (!producto) {
        return <p>Item not found</p>;
    }

    return (
        <Fragment>
            <Navbar/>
            <div className="customCard">
                <img src={producto.img} className="customCard-img" alt={producto.nombre.toUpperCase()} />
                <div className="customCard-info">
                    <p className="text-title">{producto.nombre.toUpperCase()}</p>
                    <p className="text-body">{producto.categoria}</p>
                </div>
                <div className="customCard-footer">
                    <span className="text-title">${producto.precio}</span>
                    <ItemCount />
                    
                </div>
            </div>

        </Fragment>
    );
}