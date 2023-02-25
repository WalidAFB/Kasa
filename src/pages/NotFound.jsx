import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/NotFound.css'

function NotFound() {
    return (
        <main className="notfound-container">
            <div className='error-container'>
                <h1 className="error__number">404</h1>
                <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='error__link' to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default NotFound
