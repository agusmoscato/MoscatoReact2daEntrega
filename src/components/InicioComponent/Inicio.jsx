import React from 'react'
import { Navbar } from '../NavbarComponent/Navbar'
import "./inicio.css"

export function Inicio() {
    return (
        <div>
            <Navbar/>
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
