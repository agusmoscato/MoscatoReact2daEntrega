import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"
import  {CartComponent}  from '../Carrito'

export function Navbar() {
    const categorias = [
        "aperitivos", "cervezas", "bebidas-blancas", "gaseosas", "combos"
    ]
    return (
        <nav className="navbar bg-body-tertiary  customNav">
            <div className="container-fluid">
                <CartComponent />

                <Link className="navbar-brand customNavbarBrand" to="/">Solo Bebidas</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Catalogo">Catalogo</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    {categorias.map((categoria, index) => (
                                        <li key={index}><Link className="dropdown-item" to={`/Catalogo/${categoria}`}>{categoria.toUpperCase()}</Link></li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}