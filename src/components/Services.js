import React from 'react';
import '../css/services.css';

const Services = () => {
    return (
        
        <div class="services-main-container">
            <div class="services-title">
                <h2>Our Services</h2>
            </div>

            <div class="services">
                <div class="services-card">
                    <img classname="services-image"src="./images/services/infra.png" alt="" />
                    <h2>Cloud Infrastructure</h2>
                    <div class="services-content">
                        {/* <p>Companies can scale and adapt at speed and scale, accelerate innovation, drive business agility, streamline operations, and reduce costs.
                        </p> */}

                        {/* <p style={{ textAlign: "center" }}>
                            <a class="services-button" href="/">Read More</a>
                        </p> */}

                    </div>
                </div>


                <div class="services-card">
                <img classname="services-image"src="./images/services/host.png" alt="" />
                    <h2>Hosting Services</h2>
                    <div class="services-content">
                        {/* <p> Hosting can be used for many applications, such as systems, virtual stores, blogs, and websites, with advantages ranging from better performance to greater security.
                        </p> */}

                        {/* <p style={{ textAlign: "center" }}>
                            <a class="services-button" href="/">Read More</a>
                        </p> */}

                    </div>
                </div>

                <div class="services-card">
                <img classname="services-image"src="./images/services/web.png" alt="" />
                    <h2>Web Development</h2>
                    <div class="services-content">
                        {/* <p>A successful website does three things:
                            It attracts the right kinds of visitors.
                            Guides them to the main services or product you offer.
                            Collect Contact details for future ongoing relation.
                        </p> */}

                        {/* <p style={{ textAlign: "center" }}>
                            <a class="services-button" href="/">Read More</a>
                        </p> */}

                    </div>
                </div>
                <div class="services-card">
                <img classname="services-image"src="./images/services/app.png" alt="" />
                    <h2>App Development</h2>
                    <div class="services-content">
                        {/* <p>It’s not about money or connections.It’s the willingness to outwork and outlearn.
                            Our Android app developers are committed to offering scalable, cloud-ready and intuitive apps for mobile phones, tablets, and phablets. 
                        </p> */}
                        {/* <p style={{ textAlign: "center" }}>
                            <button classname="services-button"></button>
                        </p> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services