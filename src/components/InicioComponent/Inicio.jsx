import React from 'react'
import "./inicio.css"
import Loader from '../Loader/Loader';

export function Inicio() {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);

    }, []);


    return isLoading ? (
        <Loader/>
    ) : (
        <div>
            <div className='inicioMain'>
                <h1>El mejor lugar para abastecer tu bar.</h1>
                <a href='/Catalogo' className="cta">
                    <span className="hover-underline-animation"> Comprar Ahora →</span>
                </a>
            </div>
            <div className='inicioBg'></div>
        </div>
    )
}
