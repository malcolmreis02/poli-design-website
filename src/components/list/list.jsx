import React from 'react'
import './list.css'

export const List = () => {
    return(
        <div className="row row-cols-1 row-cols-sm-3 g-4 list-main">
            <div className="col">
                <div className="card">
                <img src='https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-title h3">A atenção do público</p>
                    <p className="card-text h4">Eu uso todos os meus recursos para produzir de forma com que o cartão ou banner, por exemplo, chame e atraia a atenção de qualquer um que o veja. Toda empresa precisa de algo assim.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src='https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_960_720.jpg' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-title h3">O tal do "5 estrelas"</p>
                    <p className="card-text h4">Todos os meus clientes me mandam um feedback de como está sendo sua promoção com o uso da minha arte e, na esmagadora maioria das vezes, esse feedback é positivo.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src='https://cdn.pixabay.com/photo/2021/04/05/16/28/packages-6153947_960_720.jpg' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-title h3">A entrega mais rápida</p>
                    <p className="card-text h4">De qualquer lugar do Brasil que você seja, eu consigo levar o que você precisa até você. Nossas entregas tangem todo o Brasil de forma rápida e segura</p>
                </div>
                </div>
            </div>
            </div>
    )
}

