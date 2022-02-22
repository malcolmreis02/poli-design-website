import React from 'react'

export const CarouselPanfletos = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src='https://cdn.pixabay.com/photo/2022/02/12/13/29/desert-7008952_960_720.jpg' className="d-block w-100" alt="..." data-bs-interval="2000"/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.pixabay.com/photo/2022/02/15/07/27/travel-7014427_960_720.jpg' className="d-block w-100" alt="..." data-bs-interval="2000"/>
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.pixabay.com/photo/2022/02/12/06/21/roys-peak-7008528_960_720.jpg' className="d-block w-100" alt="..." data-bs-interval="2000"/>
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}