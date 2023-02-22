import React from 'react'
import '../styles/Banner.css'

function Banner({ title, img }) {
    return (
        <div className="banner-container">
            <img src={img} alt="banner" className="banner__img" />
            {title && <h1 className="banner__title">{title}</h1>}
        </div>
    )
}

export default Banner
