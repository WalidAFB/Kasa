import React from 'react'
import { useState } from 'react'

import '../styles/Slideshow.css'

import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="slideshow-container">
            <img className="slideshow__arrow--left" src={arrowLeft} alt="" onClick={goToPrevious} />
            {slides.map((item, index) => {
                if (index === currentIndex) {
                    return <img className="slideshow__img" key={index} src={item} alt="" />
                }
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
