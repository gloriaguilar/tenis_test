import "./historia.css";
import { RxArrowRight } from "react-icons/rx"
const Historia = () => {

    return (
        <div className="historia-container">
            <div className="l-container">
                <div className="span-container">
                    <span className="span-subtitle">TENNIS</span>
                </div>
                <div>
                    <p className="titles-accesories">Raquetas.Accesorios<br />Pelotas. </p>
                </div>
            </div>
            <p className="description-accesories">Conoce nuestras raquetas y aprende a jugar <br />Tennis cómo un profesional.</p>
            <div className="bottom-container">
                <button>Historia  <RxArrowRight style={{ fontSize: '46px', marginLeft: '10px' }} /> </button>
            </div>
        </div>
    )
}

export default Historia;