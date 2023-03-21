import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

import "./Navbar.css"

export function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary  customNav">
            <div className="container-fluid">
                <a className="navbar-brand"><CartWidget /></a>

                <Link className="navbar-brand customNavbarBrand" to="/">Solo Bebidas</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

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
                                <a className="nav-link" href="/Ofertas">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Catalogo">Catalogo</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Aperitivos</a></li>
                                    <li><a className="dropdown-item" href="#">Cervezas</a></li>
                                    <li><a className="dropdown-item" href="#">Bebidas Blancas</a></li>
                                    <li><a className="dropdown-item" href="#">Gaseosas</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}