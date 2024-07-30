import { IoPersonCircleOutline } from "react-icons/io5";
import "./Inform.scss";
import map2 from "../../assets/imgs/map2.jpg";
import { FaPlus } from "react-icons/fa";
const Inform = () => {
  return (
    <div className="Inform">
      <div className="container">
        <div className="inform">
          <div className="start">
            <div className="back">
              <button>Back</button>
              <IoPersonCircleOutline className="icons" />
            </div>
            <div className="logo">
              <h2>UZBEKISTAN</h2>
            </div>
          </div>
          <div className="informtion">
            <div className="inform-img">
              <img src={map2} alt="" />
            </div>
            <div className="inform-word">
              <div className="word-h1">
                <h1>
                  WAY <br />
                  LITTLE ROUND
                </h1>
              </div>
              <div className="word-btn-p">
                <button>01</button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                </p>
              </div>
              <div className="word-p">
                <div className="p-one">
                  <a href="#">RACER </a>
                  <a href="#">PAYMENT </a>
                  <a href="#">CIRCLE </a>
                  <a href="#">ACHIEVEMENT </a>
                  <a href="#">START-TIME </a>
                </div>
                <div className="p-two">
                  <a href="#">11 </a>
                  <a href="#">25$ </a>
                  <a href="#">4 </a>
                  <a href="#">275$ </a>
                  <a href="#">30.07.2024</a>
                </div>
              </div>
              <div className="word-button">
                <button>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inform;
