import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

  return (
    <>
        <footer>
        <div>
            <a href="https://twitter/OlaCandid"><i className="icofont-twitter"></i></a>
            <a href="https://ola-candid-509465253/"><i className="icofont-linkedin"></i></a>
            <a href=""><i className="icofont-instagram"></i></a>
            <a href="https://github.com/DeCanDid"><i className="icofont-github"></i></a>
          </div>

          <div>
            <hr />
          <small>© 2024 CanDid</small>
          </div>
        </footer>
    </>
  )
}

export default Footer;