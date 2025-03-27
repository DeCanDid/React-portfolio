import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

  return (
    <>
        <footer>
        <div className='links'>
            <a href="https://twitter.com/OlaCandid"><i className="icofont-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ola-candid-509465253/"><i className="icofont-linkedin"></i></a>
            <a href="mailto:olacandid@gmail.com"><i className="icofont-email"></i></a>
            <a href="https://instagram.com/decandid05"><i className="icofont-instagram"></i></a>
            <a href="https://github.com/DeCanDid"><i className="icofont-github"></i></a>
          </div>

          <div>
            <hr />
          <small>© 2025 CanDid</small>
          </div>
        </footer>
    </>
  )
}

export default Footer;