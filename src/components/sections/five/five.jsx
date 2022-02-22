import './five.css'
import './five-responsive.css'
import React from 'react'
import { CarouselImas } from '../../carousel/carousel-imas.jsx'



export const Five = () => {
    return(
        <div className='five-main'>
            <div className='five-content'>
                <div className='five-title'>
                    <p className='h1'>IMÃS DE GELADEIRA</p>
                </div>
                <div className='five-show'>
                    <CarouselImas/>
                </div>
            </div>
        </div>
    )
}