import React from 'react';
import footer from '../../images/logo.png'
import './Footer.css'


const Footer = () => {
    return (
        <div className="bg-dark">

            <img src={footer} alt="" />


            <div >
                <h3 className="text fs-bold" >© 2021, WORLD TRAVEL AGENCY care about you . All rights reserved</h3>
            </div>

        </div>
    );
};

export default Footer;