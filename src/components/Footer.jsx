import React from 'react';

import '../styles/Footer.css'
import logofooter from '../assets/logo_footer.svg'

function Footer() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className='footer'>
            <img src={logofooter} alt="logo kasa" />
            <p className='footer__text'>© {year} Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;