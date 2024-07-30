import "./Map.scss";
import { IoPersonCircleOutline } from "react-icons/io5";
import map1 from "../../assets/imgs/map1.jpg";
import map2 from "../../assets/imgs/map2.jpg";
import { Link } from "react-router-dom";
const Map = () => {
  return (
    <div className="Map">
      <div className="container">
        <div className="map">
          <div className="start">
            <div className="back">
              <button>Back</button>
              <IoPersonCircleOutline className="icons" />
            </div>
            <div className="logo">
              <h2>UZBEKISTAN</h2>
            </div>
          </div>
          <div className="finished">
            <div className="maps-one">
              <div className="img-one">
                <Link to={'/inform'}>
                <img src={map1} alt="" />
                </Link>
               
              </div>
              <div className="img-two">
                <img src={map2} alt="" />
                <img src={map2} alt="" />

                <img src={map2} alt="" />

                <img src={map2} alt="" />

                <img src={map2} alt="" />
              </div>
            </div>
            <div className="maps-word">
              <div className="word-one">
                <h1>RACE</h1>
              </div>
              <div className="word-two">
                <div className="word-btn">
                  <button>01</button>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                </div>
                <div className="word-btn">
                  <button>02</button>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                </div>
                <div className="word-btn">
                  <button>03</button>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                </div>
                <div className="word-btn">
                  <button>04</button>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                </div>
                <div className="word-btn">
                  <button>05</button>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
