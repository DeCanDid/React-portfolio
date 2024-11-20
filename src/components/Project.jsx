import React from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import resume from'../Resume/Resume.pdf';

const Project = () => {
    useEffect(()=>{
        AOS.init({
            duration: 600,
            delay: 400,
        });
       }, [])
  return (
    <>
         <main>
            <div data-aos='fade-out' className="section3">
                <h1>Projects.....</h1>
                <div className="myprojects">

                <div data-aos='fade-in' className="pro_1 border">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Horizon High School</h3>
                            <p>Horizon English Grammar High School
                            </p>
                            <small>HTML</small><small>CSS</small><small>JavaScript</small>
                            <center><Link to='https://horizschool-website.onrender.comon-'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>


                    <div data-aos='fade-in' className="pro4">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>E-commerce website</h3>
                            <p>A blended design of an e-commerce website for shopping 
                                varieties of products
                            </p>
                            <small>HTML</small><small>CSS</small><small>JavaScript</small>
                            <center><Link to='https://clothing-ecomms.netlify.app'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Ankara Fiesta</h3>
                            <p>Ankara Fiesta is a professonal business website
                               built to showcase African fashion style
                            </p>
                            <small>HTML</small><small>CSS</small><small>JavaScript</small>
                            <center><Link to='https://ankara-fiesta.onrender.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro2">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Ajike Fashion School</h3>
                            <p>Ajike school of Fashion that trains people how 
                                to make different designs with cottons
                            </p>
                            <small>React</small><small>CSS</small><small>JavaScript</small>
                            <center><Link to='https://ajikeacademy.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro3">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Dinner International</h3>
                            <p>The website is all about booking event programs, 
                                dinners and dates and meet new peple
                            </p>
                            <small>React</small><small>CSS</small><small>HTML</small>
                            <center><Link to='https://dinnerinternationals.onrender.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    

                    <div data-aos='fade-in' className="pro5">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>A Grant Website</h3>
                            <p>A complete clone of a US website for the elderly</p>
                            <small>HTML</small><small>CSS</small><small>JavaScript</small><small>Firebase</small>
                            <center><Link to='https://grant-website.onrender.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro6">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Real Estate</h3>
                            <p>A Real-Estate Website</p>
                            <small>React</small><small>CSS</small><small>HTML</small>
                            <center><Link to='https://real-estate-pd3v.onrender.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro7">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>A Music App</h3>
                            <p>A music App, with play, pause, next, prev buttons</p>
                            <small>HTML</small><small>CSS</small><small>JavaScript</small>
                            <center><Link to='https://musicapp-1s76.onrender.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro8">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Rocket Fx</h3>
                            <p>A crypto investment platform that allows people to 
                                invest with crypto with percentage interest
                            </p>
                            <small>React</small><small>CSS</small><small>HTML</small>
                            <center><Link to='htpps://rocketgainfxcare-s56r.onrender.com'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                    <div data-aos='fade-in' className="pro9">
                    <div className="transparent">
                        <div className="project-resource">
                            <h3>Horizon Real Estate</h3>
                            <p>A real estate website</p>
                            <small>React</small><small>CSS</small><small>JavaScript</small>
                            <center><Link to='https://horizon-real-estate.onrender.com/'><i class="icofont-external-link"></i></Link></center>
                        </div>
                    </div>
                    </div>

                   
                </div>
                <Link to='/resume'>Go To My Resume <i className="icofont-external-link"></i></Link>
            </div> 

        </main> 
    </>
  )
}

export default Project;