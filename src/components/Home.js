import React from 'react';
import '../css/home.css';


const Home = () => {


    return (
        <section id='home-section' className='home-section'>
            <div class="mainContainer">
                <div class="landingPage">
                    <div class="content1">Welcome !!</div>
                    <div class="content2">
                        <img src="/images/logo2.png" alt="logo" />
                            <div>Cloud Computing Laboratory</div>
                    </div>
                    <div class="content3">Step into our cloud and experience the power of digital transformation,</div>
                    <div class="content4">where everything is possible</div>
                    <a href="http://bitcloud.bitsathy.ac.in" target="blank"><div class="button1"><button>Let's Connect</button></div></a>
                </div>
                <img class="design1" src="/images/design-1.png" alt="design" />
            </div>
        </section>

    )
}

export default Home