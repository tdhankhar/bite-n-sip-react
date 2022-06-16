import React from "react";
import './Galleria.css';

const HorizontalImage = ({ src1, src2, src3, src4 }) => {
    return (
        <div className="galleria-image-collection">
            <div className="image">
                <img src={src1} alt='Food' style={{ height: '400px', width: '570px', borderRadius: '15px' }}/>
            </div>
            <div className="image">
                <img src={src2} alt='Food' style={{ height: '400px', width: '570px', borderRadius: '15px' }}/>
            </div>
            <div className="image">
                <img src={src3} alt='Food' style={{ height: '400px', width: '570px', borderRadius: '15px' }}/>
            </div>
            <div className="image">
                <img src={src4} alt='Food' style={{ height: '400px', width: '570px', borderRadius: '15px' }}/>
            </div>
        </div>
    )
}

const GalleriaText = () => {
    return (
        <div className="galleria-text">
            <div className="galleria-main-text">
                Galleria
            </div>
            <div className="galleria-secondary-text">
                <hr style={{ height: '10px', backgroundColor: 'white' }}/>
            </div>
        </div>
    )
}

function Galleria () {
    return (
        <div className="galleria-main" id="galleria">
            <div className="galleria-container">
                <GalleriaText />
                <HorizontalImage
                    src1={'https://lh3.googleusercontent.com/p/AF1QipPqEmI1PZMXVTvPbYttSbZJ6so9FJwgao2UR1X2=w960-h960-n-o-v1'}
                    src2={'https://lh3.googleusercontent.com/p/AF1QipMHFjn7gTHNPuDAb4CTdZ8lunpxeonOW1N6E_ly=w960-h960-n-o-v1'}
                    src3={'https://lh3.googleusercontent.com/p/AF1QipPOMwk7OEqButeElJEZJm2BuKXStCZ9XZl8oha8=w960-h960-n-o-v1'}
                    src4={'https://lh3.googleusercontent.com/p/AF1QipNtPYhSQ6ze8pTtMyX5AuHtEH4fxvaMVGfwqSAY=w960-h960-n-o-v1'}
                />
            </div>
        </div>
    )
}

export default Galleria;