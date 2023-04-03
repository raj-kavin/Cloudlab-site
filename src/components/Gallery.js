import React, { useEffect } from 'react';
import '../css/gallery.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Gallery = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: false,
        pauseOnHover: false,
        adaptiveHeight:false,
        variableWidth:false
    };



    return (
        <section className='gallery-section' id='gallery-section'>
            <div className='main-gallery'>
                <div className='gallery-header'><h2>Gallery</h2></div>
                <div className='gallery-container'>
                    <div className='actual-gallery'>
                    <Slider {...settings}>
                        <div>
                            <img src="./images/gallery/gallery1.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery2.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery3.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery4.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery5.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery6.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery7.PNG" alt="" />
                        </div>
                        <div>
                            <img src="./images/gallery/gallery8.PNG" alt="" />
                        </div>      
                    </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery