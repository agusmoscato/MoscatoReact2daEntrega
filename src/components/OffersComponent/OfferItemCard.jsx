import React, { Fragment } from 'react'
import { Offers } from "./offers"
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';


export function OfferItemCard() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Emulate a delayed network request
        setTimeout(() => {
            setItems(Offers);
            setIsLoading(false);
        }, 2000);
    }, []);

    return isLoading ? (
        <Loader/>
    ) : (
        <Fragment>
            {!isLoading && items.map(item => (
                <Link to={`/Ofertas/${item.id}`}><div className="customCard" key={item.id}>
                    <img src={item.img} className="customCard-img" alt="" />
                    <div className="customCard-info">
                        <p className="text-title">{item.nombre.toUpperCase()}</p>
                        <p className="text-body">{item.categoria}</p>
                    </div>
                    <div className="customCard-footer">
                        <span className="text-title">${item.precio}</span>
                    </div>
                </div></Link>
            ))}
        </Fragment>
    )
}