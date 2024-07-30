import { IoCaretBack, IoPersonCircleSharp } from "react-icons/io5";
import kottaBola from '../../assets/imgs/kotta-bola.webp';
import './CarsSingle.scss'

const CarsClick = () => {
  return (
    <div className="CarsClick">
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
        <div className="gm-info-all">
          <div className="left">
            <h1>C O B O L T</h1>
            <div className="left-bottom">
              <p>
                POWER <span>180</span>
              </p>
              <p>
                COLOR <span>BLACK</span>
              </p>
              <p>
                WEIGHT <span>1100 KG</span>
              </p>
              <p>
                SPEED <span>200 km/h</span>
              </p>
              <p>
                BALANCE <span>1 253 $</span>
              </p>
            </div>
          </div>
          <div className="right">
            <img src={kottaBola} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsClick;
