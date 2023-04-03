import React from 'react';
import '../css/footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <section id='aboutus-section' className='aboutus-section'>
            <footer class="contact-footer">
                <div class="row-primary">
                    <div class="column-about">
                        <h3 class="contact-headings">About Us</h3>
                        <p class="contact-aboutus">
                            Cloud computing is the on-demand availability of computer system resources, especially
                            data storage and computing power,
                            without direct active management by the user.
                        </p>
                    </div>
                    <div class="column-links">
                        <h3 class="contact-headings">Quick Links</h3>
                        <ul class="contact-navitems">
                            <li class="contact-list">
                                <a href="/#home-section">Home</a>
                            </li>
                            <li class="contact-list">
                                <a href="/#projects-section">Projects</a>
                            </li>
                            <li class="contact-list">
                                <a href="/#services-section">Services</a>
                            </li>
                            <li class="contact-list">
                                <a href="/#rewards-section">Achievements</a>
                            </li>
                            <li class="contact-list">
                                <a href="/#consultancy-section">Consultancy Services</a>
                            </li>

                        </ul>
                    </div>

                </div>
        
                <div class="row-secondary">

                    <div>
                        <p>
                            <i class="fas fa-user-circle"></i>
                        </p>
                        <p>Mr. Nataraj N</p>
                    </div>
                    <div>
                        <p>
                            <i class="fas fa-phone-alt"></i>
                        </p>
                        <p>97151 14848</p>
                    </div>
                    <div>
                        <p><i class="fas fa-envelope"></i></p>
                        <p>Nataraj@bitsathy.ac.in</p>
                    </div>
                    <div>
                        <p><i class="fas fa-map-marker-alt"></i></p>
                        <p>BIT@CloudComputing</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer