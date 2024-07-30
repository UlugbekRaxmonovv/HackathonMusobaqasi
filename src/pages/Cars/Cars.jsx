import { IoCaretBack } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import cobalt from "../../assets/imgs/cobalt.webp";
import nexia from "../../assets/imgs/nexia.jpg";
import onix from "../../assets/imgs/onix.jpg";
import kottaBola from "../../assets/imgs/kotta-bola.webp";
import "./Cars.scss";

const Cars = () => {
  return (
    <div className="Cars">
      <div className="container">
        <div className="cars-header">
          <button>
            BACK
            <IoCaretBack />
          </button>
          <h2>UZBEKISTAN</h2>
        </div>
        <div className="person-icon">
          <IoPersonCircleSharp />
        </div>
        <div className="gm-auto-all">
          <div className="gm-title-top">
            <h3>COBOLT</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <img src={cobalt} alt="" />
          </div>
          <div className="gm-title-bottom">
            <img src={nexia} alt="" />
            <h3>NEXIA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
          <div className="gm-title-top">
            <h3>ONIX</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <img src={onix} alt="" />
          </div>
          <div className="gm-title-bottom">
            <img src={kottaBola} alt="" />
            <h3>GENTRA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;

