import React from 'react'
import "./Error.css"

export function Error() {
    return (
        <div>
            <div className='errorMain'>
                <h1>Estas borracho?</h1>
                <h2>Como llegaste aqui?</h2>
                <a href='/' className="cta">
                    <span className="hover-underline-animation"> Vovler al inicio →</span>
                </a>
            </div>
            <div className='errorBg'></div>
        </div>
    )
}
