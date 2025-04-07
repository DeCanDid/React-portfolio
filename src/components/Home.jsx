import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import img from '../Images/avatar.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import resume from'../Resume/Resume.pdf';
import CV from '../Resume/CV.pdf';
const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration: 600,
            delay: 500,
        });
       }, [])
  return (
    <>
        <main contextMenu='false'>
            <section data-aos='fade-out' className='sec1'>
                <div className="row1">

                <div data-aos='fade-in' 
                 className="short-intro">
                    <p data-aos='fade-in'>
                    In the vast realm of technology, where innovation meets aesthetics, 
                    I stand as a seasoned navigator, charting the course between 
                    creativity and functionality. Greetings! I am <b>CanDid</b>, yeah! people 
                    call me CanDid because I will be CanDid with everything.
                    </p>
                    <p data-aos='fade-in'>I'm a passionate Full-stack developer with a love for crafting
                   pixel-perfect, user-friendly experiences and functionalities on the web.</p>

                   <p data-aos='fade-in'>
                   In the artistry of web development, I find my calling — a symphony of code, 
                   design, and user-centric philosophy. Like a painter wielding brushes, my 
                   tools are <b>JavaScript</b>, <b>React</b>, <b>Node.js</b> and <b>Firebase</b>, crafting not just websites but visual 
                   masterpieces that beckon exploration. From the sleek lines of minimalist 
                   designs to the dynamic vibrancy of complex layouts, I embrace the challenge 
                   of breathing life into pixels.
                   </p>

                   <p data-aos='fade-in'>
                   As a Code Artisan, my canvas extends beyond the physical to the virtual, 
                   where lines of code converge to create interactive wonders.
                   </p>
                   <p>
                   Proficient 
                   in the intricacies of frameworks such as React, Next.js, Bootstrap, Tailwind 
                   and SASS, I sculpt 
                   responsive, cross-browser compatible creations that seamlessly adapt 
                   to the diversity of the digital landscape. Clean, modular code is not 
                   just a practice; it is the language through which I communicate with 
                   the digital universe.
                   </p>
                    {/* <h2>Hello there! <br />
                  <span>I'm CanDid</span></h2> */}
                    <br />
                <Link to='/about'>See More About Me <i class="icofont-external-link"></i></Link>
                <br /><br /><br />
                <a style={{backgroundColor:'white', borderRadius:'5px',
            color:'black', padding:'10px'}} download href={CV}>Download CV</a>
                {/* <a download='CV' href={CV}>Download CV</a> */}
                </div>

                {/* <div data-aos='fade-in' className="my-img">
                    <img src={img} alt="" />
                </div> */}
                </div>
            </section>
        </main>
    </>
  )
}

export default Home;