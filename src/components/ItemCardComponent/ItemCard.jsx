import React, { Fragment } from 'react'
import ItemCount from "./ItemCardCount"
import "./ItemCard.css"

export function ItemCard() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        // Emulate a delayed network request
        setTimeout(() => {
            const data = [
                {
                    "id": 0,
                    "nombre": "cinzano",
                    "precio": "710",
                    "categoria": "aperitivo",
                    "img": "./media/MENU/APERITIVOS/CINZANO.png"
                },
                {
                    "id": 1,
                    "nombre": "gancia",
                    "precio": "950",
                    "categoria": "aperitivo",
                    "img": "./media/MENU/APERITIVOS/GANCIA.png"
                },
                {
                    "id": 2,
                    "nombre": "fernet",
                    "precio": "2370",
                    "categoria": "aperitivo",
                    "img": "./media/MENU/APERITIVOS/FERNET.png"
                },
                {
                    "id": 3,
                    "nombre": "aperol",
                    "precio": "1490",
                    "categoria": "aperitivo",
                    "img": "./media/MENU/APERITIVOS/APEROL.png"
                },
                {
                    "id": 4,
                    "nombre": "cynar",
                    "precio": "1445",
                    "categoria": "aperitivo",
                    "img": "./media/MENU/APERITIVOS/CYNAR.png"
                },
                {
                    "id": 5,
                    "nombre": "quilmes",
                    "precio": "360",
                    "categoria": "cerveza",
                    "img": "./media/MENU/CERVEZAS/QUILMES.png"
                },
                {
                    "id": 6,
                    "nombre": "patagonia",
                    "precio": "870",
                    "categoria": "cerveza",
                    "img": "./media/MENU/CERVEZAS/PATAGONIA.png"
                },
                {
                    "id": 7,
                    "nombre": "corona",
                    "precio": "720",
                    "categoria": "cerveza",
                    "img": "./media/MENU/CERVEZAS/CORONA.png"
                },
                {
                    "id": 8,
                    "nombre": "andes",
                    "precio": "460",
                    "categoria": "cerveza",
                    "img": "./media/MENU/CERVEZAS/andes.png"
                },
                {
                    "id": 9,
                    "nombre": "budweiser",
                    "precio": "530",
                    "categoria": "cerveza",
                    "img": "./media/MENU/CERVEZAS/budweiser.png"
                },
                {
                    "id": 10,
                    "nombre": "vodka smirnoff",
                    "precio": "1470",
                    "categoria": "bebidaBlanca",
                    "img": "./media/MENU/BEBIDASBLANCAS/smirnoff.png"
                },
                {
                    "id": 11,
                    "nombre": "vodka skyy",
                    "precio": "1230",
                    "categoria": "bebidaBlanca",
                    "img": "./media/MENU/BEBIDASBLANCAS/skyy.png"
                },
                {
                    "id": 12,
                    "nombre": "gin bosque",
                    "precio": "1650",
                    "categoria": "bebidaBlanca",
                    "img": "./media/MENU/BEBIDASBLANCAS/BOSQUE.png"
                },
                {
                    "id": 13,
                    "nombre": "gin beefeater",
                    "precio": "6300",
                    "categoria": "bebidaBlanca",
                    "img": "./media/MENU/BEBIDASBLANCAS/beefeater.png"
                },
                {
                    "id": 14,
                    "nombre": "malibu",
                    "precio": "3250",
                    "categoria": "bebidaBlanca",
                    "img": "./media/MENU/BEBIDASBLANCAS/malibu.png"
                },
                {
                    "id": 15,
                    "nombre": "pepsi",
                    "precio": "490",
                    "categoria": "gaseosa",
                    "img": "./media/MENU/GASEOSAS/pepsi.png"
                },
                {
                    "id": 16,
                    "nombre": "7up",
                    "precio": "390",
                    "categoria": "gaseosa",
                    "img": "./media/MENU/GASEOSAS/7up.png"
                },
                {
                    "id": 17,
                    "nombre": "mirinda",
                    "precio": "420",
                    "categoria": "gaseosa",
                    "img": "./media/MENU/GASEOSAS/mirinda.png"
                },
                {
                    "id": 18,
                    "nombre": "paso de los toros",
                    "precio": "430",
                    "categoria": "gaseosa",
                    "img": "./media/MENU/GASEOSAS/PASODELOSTOROS.png"
                },
                {
                    "id": 19,
                    "nombre": "h2o",
                    "precio": "430",
                    "categoria": "gaseosa",
                    "img": "./media/MENU/GASEOSAS/h2o.png"
                }
            ];
            setItems(data);
        }, 2000);
    }, []);

    return (
        <Fragment>
            {items.map(item => (
                <div className="customCard" key={item.id}>
                    <img src={item.img} className="customCard-img" alt="" />
                    <div className="customCard-info">
                        <p className="text-title">{item.nombre.toUpperCase()}</p>
                        <p className="text-body">{item.categoria}</p>
                    </div>
                    <div className="customCard-footer">
                        <span className="text-title">${item.precio}</span>
                        <ItemCount />
                        <div className="customCard-button">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}




