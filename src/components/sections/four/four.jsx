import './four.css'
import './four-responsive.css'
import React from 'react'
import { CarouselPanfletos } from '../../carousel/carousel-panfletos.jsx'

export const Four = () => {
    return(
        <div className='four-main'>
            <div className='four-content'>
                <div className='four-title'>
                    <p className='h1'>PANFLETOS</p>
                </div>
                <div className='four-show'>
                    <CarouselPanfletos/>
                </div>
            </div>
        </div>
    )
}