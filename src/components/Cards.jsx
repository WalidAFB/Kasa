import React from 'react'

import '../styles/Card.css'

function Cards({ cover, title }) {
    return (
        <article className='card__article'>
            <img className='card__img' src={cover} alt="" />
            <p className='card__text' >{title}</p>
        </article>
    )
}

export default Cards
