import React from 'react'
import '../css/project.css';

const Projects = () => {



    return (
        <section name="projects-section" id='projects-section' className='projects-section'>
            <div className='main-project'>
                <div className="project-header"><h2>Projects</h2></div>
                <div className='project-cardcontainer'>
                    <div className="project-card">
                        <div className="project-imgbox">
                            <img className='project-img'
                                src="./images/projects/ticket.jpg" alt='error' />
                        </div>
                        <div className='project-heading-before'>Ticketing System</div>
                        <div className="project-content">
                            <h2>Ticketing System</h2>
                            <p>
                            Ticketing System provides a bridge to solve problems of the students in and around the campus.
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-imgbox">
                            <img className='project-img'
                                src="./images/projects/repository.jpg" alt='error' />
                        </div>
                        <div className='project-heading-before'>BIT Repository</div>
                        <div className="project-content">
                            <h2>BIT Repository</h2>
                            <p>
                                BIT repository enables us to use this for storing projects and also for hosting their websites.
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-imgbox">
                            <img className='project-img'
                                src="./images/projects/network.jpg" alt='error' />
                        </div>
                        <div className='project-heading-before'>Network Management Tool</div>
                        <div className="project-content">
                            <h2>Network Management Tool</h2>
                            <p>
                                Network Management tool is a desktop application to manage end devices connected to a network remotely.
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-imgbox">
                            <img className='project-img'
                                src="./images/projects/exam.jpg" alt='error' />
                        </div>
                        <div className='project-heading-before'>Exam Monitoring System</div>
                        <div className="project-content">
                            <h2>Exam Monitoring System</h2>
                            <p>
                                Online examination portal is built to conduct exams using facial  recognition for students.
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-imgbox">
                            <img className='project-img'
                                src="./images/projects/cloud.jpg" alt='error' />
                        </div>
                        <div className='project-heading-before'>BIT Cloud Infrastructure</div>
                        <div className="project-content">
                            <h2>BIT Cloud Infrastructure</h2>
                            <p>
                                BITCLOUD Infrastructure enables us to utilize computing resources by using OpenStack Platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>


    )
}

export default Projects