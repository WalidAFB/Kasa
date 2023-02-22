import React from 'react'

import '../styles/Rating.css'

import greyStar from '../assets/star_grey.svg'
import orangeStar from '../assets/star_orange.svg'

function Rating({ rate }) {
    const stars = [0, 1, 2, 3, 4].map((index) => {
        if (index < rate) {
            return <img key={index} src={orangeStar} alt="" />
        } else {
            return <img key={index} src={greyStar} alt="" />
        }
    })

    return <div className="rating-container">{stars}</div>
}

export default Rating
