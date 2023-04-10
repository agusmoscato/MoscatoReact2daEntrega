import React, { Fragment } from 'react'
import {OfferItemCard} from './OfferItemCard'



export function OfferItemListContainer() {
    return (
        <Fragment>
            <h1 style={{ marginTop: '30px', textAlign: 'center', fontFamily:'fantasy', letterSpacing:'7px', fontSize:'50px'  }}>Ofertas</h1>
            <div id='shopContent' style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <OfferItemCard/>
                
            </div>
        </Fragment>
    )
}