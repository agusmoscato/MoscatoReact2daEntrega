import React from 'react'
import { Link } from 'react-router-dom';

export function FiltersBtn() {
    const categorias = [
        "aperitivo", "cerveza", "bebidas-blancas", "gaseosas"
    ]

    return (
        <ul className='Filters'>
            <Link to={"/Catalogo"} className="FiltersBtn">TODO</Link>
      {categorias.map((categoria, index) => (
        <Link key={index} className="FiltersBtn" to={`/Catalogo/category/${categoria}`}>{categoria.toUpperCase()}</Link>
      ))}
    </ul>
  );
}
