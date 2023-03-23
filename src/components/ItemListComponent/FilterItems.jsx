import React from 'react'
import { products } from "../ItemCardComponent/products"
import { useParams, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { FiltersBtn } from "./FiltersBtn"
import { Navbar } from '../NavbarComponent/Navbar';

export function FilterItems() {
    const { productCategory } = useParams();

    const data = products.filter((p) => p.categoria === productCategory);
    if (!data) {
        return <p>Item not found</p>;
    }

    return (
        <Fragment>
            <Navbar />
            <h1 style={{ marginTop: '30px', textAlign: 'center', fontFamily: 'fantasy', letterSpacing: '7px', fontSize: '50px' }}>{productCategory.toUpperCase()}</h1>
            <FiltersBtn />
            <div id='shopContent' style={{ minHeight: '80vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {data.map(item => (
                    <div className="customCard" key={item.id}>
                        <Link to={`/item/${item.id}`}><img src={item.img} className="customCard-img" alt="" /></Link>
                        <div className="customCard-info">
                            <p className="text-title">{item.nombre.toUpperCase()}</p>
                            <p className="text-body">{item.categoria}</p>
                        </div>
                        <div className="customCard-footer">
                            <span className="text-title">${item.precio}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

