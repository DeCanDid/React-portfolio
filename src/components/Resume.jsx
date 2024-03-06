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
                    <h4>Frontend Developer</h4>
                    <p>A passionate and experience Frontend Developer
                    with a love for crafting pixel-perfect, user-friendly 
                    experiences on the web
                    </p>
                    </div>

                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <p><i className="icofont-phone"></i>&nbsp; +2349019134950</p>
                        <p><i className="icofont-phone"></i>&nbsp; +2349033179950</p>
                        <p><i className="icofont-email"></i>&nbsp;&nbsp;<a href='mailto:olacandid@gmail.com'>olacandid@gmail.com</a></p>
                    </div>

                    <div className="skills">
                        <h4>Skills</h4>
                        <h5>Frontend Development</h5>
                        <div className="stack">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>BootStrap</p></div>
                        <div><p>SASS</p></div>
                        <div><p>JavaScript</p></div>
                        <div><p>React.js</p></div>
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
                        <h5>Selina Venture Ltd</h5>
                        <p>Computer Operator</p>
                        <p>2019 - 2022</p>
                        </div>

                        <div className="exp">
                        <h5>RamBoufe Restaurant</h5>
                        <p>Frontend Engineer & Inventory Officer</p>
                        <p>2023</p>
                        </div>

                        <div className="exp">
                        <h5>Creative Digita Technologies</h5>
                        <p>Coding Instructor</p>
                        <p>2023 till date</p>
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