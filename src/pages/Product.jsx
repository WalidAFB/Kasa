import React from 'react'
import { useParams } from 'react-router-dom'

import Slideshow from '../components/Slideshow'
import Tag from '../components/Tags'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'

import '../styles/Product.css'

import data from '../data/logements.json'

function Product() {
    const { id } = useParams()
    const product = data.find((product) => product.id === id)
    const { pictures, title, location, tags, host, rating, description, equipments } = product

    return (
        <main className="product-container">
            <Slideshow slides={pictures} />
            <div className="product__info">
                <div>
                    <h1 className="product__title">{title}</h1>
                    <p className="product__location">{location}</p>
                    <Tag tags={tags} />
                </div>
                <div className="host-container">
                    <div className="host__info">
                        <p className="host__name">{host.name}</p>
                        <img className="host__picture" src={host.picture} alt="" />
                    </div>
                    <div>
                        <Rating rate={rating} />
                    </div>
                </div>
            </div>
            <div className="collapse-product">
                <Collapse title="Description" content={description} />
                <Collapse title="Équipement" content={equipments} />
            </div>
        </main>
    )
}

export default Product
