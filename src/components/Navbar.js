import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../css/navbar.css';
import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    useEffect(() => {
        changeNavbarColor()
        // adding the event when scroll change background
        window.addEventListener('scroll', changeNavbarColor);
      })

    return (
        <div class={colorChange? 'header colorchange' : 'header'}>
            <div class="leftHeader">
                <a href='/#home-section'><img class="headerLogo" src="https://www.bitsathy.ac.in/wp-content/themes/baiotsathycollege/assets/images/header%2006.png" alt="logo" /></a>
                {/* <div className="clg-name"><span>Bannari Amman Institute of Technology</span></div> */}
            </div>
            <div class="rightHeader">
                <div class="navItem"><AnchorLink href="#projects-section">Projects</AnchorLink></div>
                
                <div class="navItem"><AnchorLink href="#rewards-section" offset={100}>Achievements</AnchorLink> </div>
                <div class="navItem"><AnchorLink href="#services-section" offset={100}>Services</AnchorLink> </div>
                <div class="navItem"><AnchorLink href="#consultancy-section" offset={100}>Consultancy</AnchorLink></div>
            </div>
        </div>
    )
}

export default Navbar