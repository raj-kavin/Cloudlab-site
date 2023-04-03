import React from 'react'
import '../css/labcard.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Labcard = () => {

    const paneles = document.querySelectorAll('.panel');

    paneles.forEach(panel => {
        panel.addEventListener('mouseover', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    })

    function removeActiveClasses() {
        paneles.forEach(panel => {
            panel.classList.remove('active');
        })
    }

    return (
        <div className="labcard-container">

            <div className="panel achievements normal-shadow active">
                <h3>Achievements</h3>
                <div className="informacion">
                    <AnchorLink smooth href='#rewards-section' style={{ textDecoration: 'none', color: 'white' }} offset={100}><button className='panel-button'><span>Achievements</span></button></AnchorLink>
                    <AnchorLink smooth href='#rewards-section' style={{ textDecoration: 'none', color: 'white' }} offset={100}> <p>The only goals you don't achieve in life are the goals you don't set</p></AnchorLink>
                </div>
            </div>


            <div className="panel projects normal-shadow ">
                <h3>Projects</h3>
                <div className="informacion">
                <AnchorLink  href='#projects-section' style={{ textDecoration: 'none', color: 'white' }}><button className='panel-button'><span>Projects</span></button></AnchorLink>
                <AnchorLink href='#projects-section' style={{ textDecoration: 'none', color: 'white' }}> <p>Expect the best, plan for the worst, and prepare to be surprised.</p></AnchorLink>
                </div>
            </div>


            <div className="panel gallery normal-shadow">
                <h3>Gallery</h3>
                <div className="informacion">
                <AnchorLink smooth href='#gallery-section' style={{ textDecoration: 'none', color: 'white' }}><button className='panel-button'><span>Gallery</span></button></AnchorLink>
                <AnchorLink smooth href='#gallery-section' style={{ textDecoration: 'none', color: 'white' }}><p>The sky is the ultimate art gallery just above us.</p></AnchorLink>
                </div>
            </div>


            <div className="panel consultancy-services normal-shadow">
                <h3>Consultancy Services</h3>
                <div className="informacion">
                <AnchorLink smooth href='#consultancy-section' style={{ textDecoration: 'none', color: 'white' }} offset={100}><button className='panel-button'><span>Consultancy Services</span></button></AnchorLink>
                <AnchorLink smooth href='#consultancy-section' style={{ textDecoration: 'none', color: 'white' }} offset={100}><p>The best way to make your dreams come true is to wake up</p></AnchorLink>
                </div>
            </div>


            <div className="panel faculty normal-shadow ">
                <h3>Faculty</h3>
                <div className="informacion">
                <AnchorLink smooth href='#faculty-section' style={{ textDecoration: 'none', color: 'white' }} offset={100}><button className='panel-button'><span>Faculty</span></button></AnchorLink>
                <AnchorLink smooth href='#faculty-section' style={{ textDecoration: 'none', color: 'white' }} offset={100}><p>Teaching is the one profession that creates all other professions.</p></AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Labcard