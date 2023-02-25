import React from 'react'
import { useState } from 'react'

import '../styles/Slideshow.css'

// Import des données 
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fonction qui permet d'acceder a l'image précédente dans le Slideshow
    function goToPrevious() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    // Fonction qui permet d'acceder a l'image suivante dans le Slideshow
    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // Si il l'array d'image n'en contient qu'une, on retire les flèches de navigation et le compteur d'images.
    if (slides.length <= 1) {
        return (
            <div className="slideshow-container">
                <img className="slideshow__img" key={0} src={slides[0]} alt="" />
            </div>
        )
    }

    return (
        <div className="slideshow-container">
            <img className="slideshow__arrow--left" src={arrowLeft} alt="" onClick={goToPrevious} />
            {slides.map((item, index) => {
                if (index === currentIndex) {
                    return <img className="slideshow__img" key={index} src={item} alt="" />
                }
                // Empêche les erreurs de retour inexistant sur la method map
                return null
            })}
            <img className="slideshow__arrow--right" src={arrowRight} alt="" onClick={goToNext} />
            <div className="slideshow__counter">
                {currentIndex + 1} / {slides.length}
            </div>
        </div>
    )
}

export default Slideshow

