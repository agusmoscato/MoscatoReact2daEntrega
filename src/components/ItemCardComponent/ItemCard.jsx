import React, { Fragment } from 'react'
import ItemCount from "./ItemCount"
import "./ItemCardComponent.css"
import { Link } from 'react-router-dom';
import { products } from './products';

export function ItemCard() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        // Emulate a delayed network request
        setTimeout(() => {
            setItems(products);
            setIsLoading(false);
        }, 2000);

    }, []);

    return (
        <Fragment>
            {isLoading && <div style={{ alignSelf: 'center', color: 'gainsboro', textAlign: 'center', fontFamily: 'fantasy', letterSpacing: '7px', fontSize: '50px' }}>Cargando...</div>}
            {!isLoading && items.map(item => (
                <div className="customCard" key={item.id}>
                    <Link to={`/item/${item.id}`}><img src={item.img} className="customCard-img" alt="" /></Link>
                    <div className="customCard-info">
                        <p className="text-title">{item.nombre.toUpperCase()}</p>
                        <p className="text-body">{item.categoria}</p>
                    </div>
                    <div className="customCard-footer">
                        <span className="text-title">${item.precio}</span>
                        <ItemCount />
                    </div>
                </div>
            ))}
        </Fragment>
    )
}







