import './six.css'
import './six-responsive.css'
import React from 'react'
import { CarouselCartazes } from '../../carousel/carousel-cartazes.jsx'

export const Six = () => {
    return(
        <div className='six-main'>
            <div className='six-content'>
                <div className='six-title'>
                    <p className='h1'>CARTAZES</p>
                </div>
                <div className='six-show'>
                    <CarouselCartazes/>
                </div>
            </div>
        </div>
    )
}