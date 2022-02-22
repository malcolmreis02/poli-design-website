import './one.css'
import './one-responsive.css'
import poli from '../../img/poli.png'
import React from 'react'

export const One = () => {
    return(
        <div>
            <div className='one-main'>
                <div className='one-main-content'>
                    <div className='one-top'>
                        <div className="one-logo">
                        <img src={poli} alt='logo da poli'/>
                        </div>
                    </div>
                    <div className="one-box-1">
                        <div className='one-main-call'>
                            <p className='one-poli-designer'>
                                POLIDESIGN
                            </p>
                            <div className='one-box-produtos'>
                                <p>A SUA DESGINER GRÁFICA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}