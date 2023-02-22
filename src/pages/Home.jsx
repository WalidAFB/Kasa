import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

import Banner from '../components/Banner'
import Card from '../components/Cards'

import data from '../data/logements.json'
import bannerHome from '../assets/banner_home.png'

function Home() {
    return (
        <main className='home-container'>
            <Banner img={bannerHome} title="Chez vous, partout et ailleurs" />
            <section className="card-container">
                {data.map((product) => {
                    return (
                        <Link className="card__link" key={product.id} to={`/products/${product.id}`}>
                            <Card cover={product.cover} title={product.title} />
                        </Link>
                    )
                })}
            </section>
        </main>
    )
}

export default Home
