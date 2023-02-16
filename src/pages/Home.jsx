import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

import Banner from '../components/Banner'
import Card from '../components/Cards'

import data from '../data/logements.json'

function Home() {
    return (
        <main>
            <Banner />
            <section className="card-container">
                {data.map((product) => {
                    return (
                        <Link className='card__link' key={product.id} to={`/products/${product.id}`}>
                            <Card cover={product.cover} title={product.title} />
                        </Link>
                    )
                })}
            </section>
        </main>
    )
}

export default Home
