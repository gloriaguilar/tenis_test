import "./nav.css";
import { CiBaseball } from "react-icons/ci"
import { useState } from "react";
const Navbar = () => {
    const [expand, setExpand] = useState(false)

    return (
        <div className="nav-container">
            <div className="nav-link-container">
                <div className="nav-logo">
                    <CiBaseball className="icon-ball" />

                </div>
                <div className={`nav-links ${expand ? 'expand' : ''}`}>
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Acerca de nosotros</a></li>
                        <li><a href="">Historia</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div className="nav-links language-links">
                <ul>
                    <li><a href=""> ES </a></li>
                    <li><a href=""> EN </a></li>
                </ul>
            </div>
            <div className="icon-responsive">
                <button className="burger-icon" onClick={() => {
                    setExpand(!expand);
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default Navbar;