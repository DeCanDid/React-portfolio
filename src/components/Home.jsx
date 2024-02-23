import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import img from '../Images/avatar.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration: 600,
            delay: 500,
        });
       }, [])
  return (
    <>
        <main>
            <section data-aos='fade-out' className='sec1'>
                <div className="row1">
                <div data-aos='fade-in' 
                 className="short-intro">
                    <h2>Hello there! <br />
                  <span>I'm CanDid</span></h2>
                    <p>A passionate frontend web developer with a love for crafting
                   pixel-perfect, user-friendly experiences on the web.</p>
                <Link to='/about'>Read More About Me <i class="icofont-external-link"></i></Link>
                </div>

                <div data-aos='fade-in' className="my-img">
                    <img src={img} alt="" />
                </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Home;