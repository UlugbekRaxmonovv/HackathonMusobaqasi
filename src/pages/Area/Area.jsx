import React from 'react';
import "./Path.scss";
import { IoPersonCircleOutline } from "react-icons/io5";
import path2 from "../../assets/imgs/path2.jpg";
import { Link } from 'react-router-dom';
const Area = () => {
    return (
        <div className="Path">
      <div className="container">
        <div className="path">
          <div className="start">
            <div className="back">
              <button>Back</button>
              <IoPersonCircleOutline className="icons" />
            </div>
            <div className="logo">
              <h2>UZBEKISTAN</h2>
            </div>
          </div>
          <div className="finish">
            <div className="type">
              <div className="type-one">
                <h1>TYPE OF RACE</h1>
                <p>LINE/ROUND</p>
              </div>
              <div className="type-two">
                <button>01</button>
                <h1>LINE</h1>
              </div>
              <div className="type-three">
                <button>02</button>
                <h1>ROUND</h1>
              </div>
            </div>
            <div className="type-img">
            <Link to={'/map'}> <img src={path2} alt="" /></Link>
             
            <Link to={'/map'}> <img src={path2} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Area;
