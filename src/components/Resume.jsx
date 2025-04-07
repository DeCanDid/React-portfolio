import './Resume.css';
import Resum from '../Resume/Resume.pdf'
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>

        <div className="resume-wrapper">

        
        <div className="resume">

            <div className="first_row">
                        <div className='end'>
                        <small> 
                        <a download href={Resum}><i className="icofont-download">
                            </i>&nbsp;Download</a></small>
                        </div>

                <div className="firstCol">
                    
                    <div className="abt">
                    <h2>Ismail Abdulbaseet O.</h2><br />
                    <h4>Full-Stack Developer</h4>
                    <p>Passionate Full-stack Developer specializing in React, Next.js, Node.js, and JavaScript. Expert in building responsive interfaces and robust backend systems. Proven record of delivering high-impact web solutions that enhance user experience and drive business success.
                    </p>
                    </div>

                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <p><i className="icofont-phone"></i>&nbsp; +2349033179950</p>
                        {/* <p><i className="icofont-phone"></i>&nbsp; +2349033179950</p> */}
                        <p><i className="icofont-email"></i>&nbsp;&nbsp;<a href='mailto:olacandid@gmail.com'>olacandid@gmail.com</a></p>
                    </div>

                    <div className="skills">
                        <h4>Skills</h4>
                        <h5>Full Stack Development</h5>
                        <div className="stack">
                        <div><p>JavaScript</p></div>
                        <div><p>React.js</p></div>
                        <div><p>Next.js</p></div>
                        <div><p>Node.js</p></div>
                        <div><p>BootStrap</p></div>
                        <div><p>SASS</p></div>
                        <div><p>Firebase</p></div>
                        <div><p>Canva</p></div>
                        </div>
                    </div>

                    <div className="interest">
                        <h4>Interest</h4>
                        <div className="stack">
                        <div><p>Reading</p></div>
                        <div><p>Coding</p></div>
                        <div><p>Games</p></div>
                        </div>
                    </div>
                </div>

                
            </div>
            
            <div className="second_row">

            <div className="secondCol">
                    <div className="edus">
                        <div className="edu">
                        <h4>Education</h4>
                        <h5>The Polytechnic Ibadan</h5>
                        <p>Science Laboratory Technology (SLT)</p>
                        </div>

                        <div className="edu">
                        <h5>SQI College of ICT, Dugbe Campus Ibadan</h5>
                        <p>Software Engineer (Frontend Development)</p>
                        </div>

                        <div className="edu">
                        <h5>National Open University of Nigeria</h5>
                        <p>Computer Science</p>
                        <p>Undergraduate</p>
                        </div>

                        <div className="exp">
                        <h4>Experience</h4>
                        <h5>Creative Digita Technologies</h5>
                        <p>Coding Instructor</p>
                        <p>2023 till date</p>
                        
                        </div>

                        <div className="exp">
                        <h5>RamBoufe Restaurant</h5>
                        <p>Frontend Engineer & Inventory Officer</p>
                        <p>2023</p>
                        </div>

                        <div className="exp">
                        <h5>Selina Venture Ltd</h5>
                        <p>Computer Operator</p>
                        <p>2019 - 2022</p>
                        </div>

                        <div className="exp">
                        <h4>Social Links</h4>

                        <p>LinkedIn: &nbsp; <a style={{color:'#fff'}} href="https://www.linkedin.com/in/ola-candid-509465253/">
                        https://www.linkedin.com/in/ola-candid-509465253/</a></p>
                        
                        <p>Portfolio: &nbsp; <a style={{color:'#fff'}} href="https://react-portfolio-3gw6.onrender.com">
                            https://react-portfolio-3gw6.onrender.com</a></p>

                        <p>GitHub: &nbsp; <a style={{color:'#fff'}} href="https://github.com/DeCanDid">
                        https://github.com/DeCanDid</a></p>

                        <p>Twitter: &nbsp; <a style={{color:'#fff'}} href="https://twitter.com/OlaCandid">
                        https://twitter.com/OlaCandid</a></p>
                        </div>

            
                    </div>
                </div>
            </div>
        </div>
      
        </div>

        <div className='toContact'>
            <Link to='/contact'>Contact Me Now  <i className="icofont-external-link"></i></Link>
        </div>
    </>
  )
}

export default Resume;