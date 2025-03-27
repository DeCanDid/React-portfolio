import './About.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(()=>{
    AOS.init({
      duration: 600,
      delay: 500
    })
  })
  return (
    <>
    
     <main>
        <section data-aos='fade-out' className='section2'>
          <div>
            <h2>About Me.</h2>
            <article data-aos='fade-in'>
              <h4>🛠️ Crafting Digital Experiences:</h4>
              <p>I fell in love with coding in 2022, and since then, 
                I've been on a mission to make the digital world a more 
                inviting place. My focus is on turning ideas into visually 
                appealing and functional websites.</p>
             
            </article>

            <article data-aos='fade-in'>
              <h4>🖥️ Tools of Innovation</h4>
              <p>In my toolkit, you'll find a proficiency in HTML5, CSS3, 
                and JavaScript, along with a mastery of frameworks like 
                React, Bootsrap, Tailwind and some other CSS libraries. I love tackling challenges, 
                be it optimizing for performance, ensuring seamless 
                responsiveness, or architecting elegant solutions to 
                complex problems.</p>
            </article>

            <article data-aos='fade-in'>
              <h4>✨ Design + Code:</h4>
              <p>I believe in the power of simplicity and functionality. 
                Whether it's a startup project or a redesign, I enjoy 
                collaborating to marry great design with smooth functionality.</p>
            </article>

            <article data-aos='fade-in'>
              <h4>🌐 Beyond the Screen:</h4>
              <p>When I'm not immersed in code, you'll find me playing games, 
                exploring the 
                digital frontier, experimenting with the latest design trends, 
                and contributing to open-source projects. I believe in the power 
                of community and continuous learning to stay ahead in this 
                dynamic field.</p>
            </article>

            <article data-aos='fade-in'>
              <h4>My Leisure Time</h4>
              <p>I so much love playing Games when I am less busy 
                and I think it helps me to recover from stress and also
                 boost my thinking strength</p>
            </article>

          </div>
          <div className='change' data-aos='fade-in'>
              <p><Link to='/project'>Lets Go To Projects <i className="icofont-external-link">
                </i></Link></p>
            </div>
        </section>
     </main>
    </>
  )
}

export default About;