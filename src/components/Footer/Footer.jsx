import "./footer.css"
import { CiFacebook } from "react-icons/ci"
import { FiTwitter } from "react-icons/fi"
import { SlSocialYoutube } from "react-icons/sl"
import { BsLinkedin } from "react-icons/bs"
import { CiBaseball } from "react-icons/ci"

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-options">
                <a href="">Inicio</a>
                <a href="">Acerca de nosotros</a>
                <a href="">Historia</a>
                <a href="">Contacto</a>
            </div>
            <div className="footer-icons">
                <CiFacebook />
                <FiTwitter />
                <SlSocialYoutube />
                <BsLinkedin />
            </div>
            <div className="footer-icon-container">
                <CiBaseball className="icon-footer" />
            </div>
        </div>
    )
}


export default Footer;