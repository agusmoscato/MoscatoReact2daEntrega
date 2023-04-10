import React from 'react'
import "./Error.css"

export function Error() {
    return (
        <div>
            <div className='errorMain'>
                <h1>EROR 404</h1>
                <h2>Estas borracho?</h2>
                <h3>Como llegaste aqui?</h3>
                <a href='/' className="cta">
                    <span className="hover-underline-animation"> Vovler al inicio →</span>
                </a>
            </div>
            <div className='errorBg'></div>
        </div>
    )
}
