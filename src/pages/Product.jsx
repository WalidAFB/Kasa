import React from 'react'
import { useParams } from 'react-router-dom'

import Slideshow from '../components/Slideshow'
import Tag from '../components/Tags'

import '../styles/Product.css'

import data from '../data/logements.json'

function Product() {
    const { id } = useParams()
    const product = data.find((product) => product.id === id)
    const { pictures, title, location, tags, host } = product

    return (
        <main>
            <Slideshow slides={pictures} />
            <div className='product__info'>
                <div>
                    <h1 className="product__title">{title}</h1>
                    <p className="product__location">{location}</p>
                    <Tag tags={tags} />
                </div>
                <div className="host-container">
                    <p className="host__name">{host.name}</p>
                    <img className="host__picture" src={host.picture} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Product
