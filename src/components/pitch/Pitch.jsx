import React from "react";
import logo from '../../bunny_bites.png';
import './Pitch.css'

const LeftPitch = () => {
    return (
        <div className="left-pitch">
            <div className="left-pitch-text">
                Best Chinese & Continental restaurant in town
            </div>
            <div className="left-pitch-button">
                <button className="order-button" onClick={() => {
                    window.open("https://bunnysbitensip.dotpe.in/")
                }}>
                    Order Now
                </button>
            </div>
        </div>
    )
}

const RightPitch = () => {
    return (
        <div className="logo">
            <img 
                className="main-logo" 
                src={logo}
                alt="Bunny-Bites" 
            />
        </div>
    )
}

function Pitch () {
    return (
        <div className="pitch" id="pitch">
            <div className="pitch-container">
                <LeftPitch />
                <RightPitch />
            </div>
        </div>
    )
}

export default Pitch;