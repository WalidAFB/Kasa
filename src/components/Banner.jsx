import React from 'react'
import '../styles/Banner.css'
import img from '../assets/banner.png'

function Banner() {
    
    return (
        <div className="banner">
            <img src={img} alt="banner" className="banner__img" />
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner
