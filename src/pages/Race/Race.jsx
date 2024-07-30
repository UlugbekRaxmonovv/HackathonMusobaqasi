import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import "./Race.scss";
import nestOne from "../../assets/imgs/nestOne.jpg";
import registon from "../../assets/imgs/registon.jpg";
import xiva from "../../assets/imgs/xiva.jpg";
import fargana from "../../assets/imgs/fargana.jpg";
const Race = () => {
    return (
        <div className="City">
      <div className="container">
        <div className="city">
          <div className="start">
            <div className="back">
              <button>Back</button>
              <IoPersonCircleOutline className="icons" />
            </div>
            <div className="logo">
              <h2>UZBEKISTAN</h2>
            </div>
          </div>
          <div className="end">
            <div className="end-one">
              <h1>AREA</h1>
            </div>
            <div className="end-two">
              <div className="two-first">
                <div className="first-one">
                  <img src={nestOne} alt="" />
                </div>
                <div className="first-two">
                  <h2>NESTON</h2>
                  <p>
                    NESTON is a city on the eastern bank of the Balkh River in
                    Uzbekistan. It is the capital of the Neston District and the
                    largest city in the Balkh region.
                  </p>
                </div>
              </div>
              <div className="two-first">
                <div className="first-one">
                  <img src={registon} alt="" />
                </div>
                <div className="first-two">
                  <h2>Registon</h2>
                  <p>
                    Registon is a city on the eastern bank of the Balkh River in
                    Uzbekistan. It is the capital of the Neston District and the
                    largest city in the Balkh region.
                  </p>
                </div>
              </div>
              <div className="two-first">
                <div className="first-one">
                  <img src={xiva} alt="" />
                </div>
                <div className="first-two">
                  <h2>Xiva</h2>
                  <p>
                    Xiva is a city on the eastern bank of the Balkh River in
                    Uzbekistan. It is the capital of the Neston District and the
                    largest city in the Balkh region.
                  </p>
                </div>
              </div>
              <div className="two-first">
                <div className="first-one">
                  <img src={fargana} alt="" />
                </div>
                <div className="first-two">
                  <h2>Fargana</h2>
                  <p>
                    Fargana is a city on the eastern bank of the Balkh River in
                    Uzbekistan. It is the capital of the Neston District and the
                    largest city in the Balkh region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Race;
