import "./cover.css";
import logo from "../../resources/group.png";
import Navbar from "../Nav/Nav";
import { RxArrowRight } from "react-icons/rx"
const Cover = () => {
    return (
        <div className="body-cover">
            <Navbar />
            <div className="text-cover">
                <p>Las mejores raquetas para <br /> jugar <span className="subtitle">Tennis</span> </p>
                <button className="btn-about">Acerca de nosotros <RxArrowRight style={{ fontSize: '46px', marginLeft: '10px' }} /> </button>
            </div>

        </div>
    )
}

export default Cover;