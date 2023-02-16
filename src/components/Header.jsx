import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../styles/Header.css'
import LOGO from '../assets/logo_header.svg'

function Header() {
    return (
        <header className='header'>
            <Link to="/">
                <img src={LOGO} alt="logo kasa" />
            </Link>
            <ul className='navlink'>
                <NavLink to={"/"} className='navlink__li'><li>Acceuil</li></NavLink>
                <NavLink to={"about"} className='navlink__li'><li>A Propos</li></NavLink>
            </ul>
        </header>
    )
}


export default Header
