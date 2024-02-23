import err404 from '../Images/404.jpg';
import {Link} from 'react-router-dom';
import './NotFound.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const NotFound = () => {
   useEffect(()=>{
    AOS.init({
        duration: 600,
        delay: 500,
    });
   }, [])

  return (
    <>
        <div data-aos="fade-out" className='notfound-page'>
            <div>
            <h2>Sorry! Are you lost...</h2>
            <Link to='/'>Go Back To The Homepage <i className="icofont-external-link"></i></Link>
            </div>
            <div className='img404'>
                <img src={err404} alt="" />
            </div>
        </div>
    </>
  )
}

export default NotFound;