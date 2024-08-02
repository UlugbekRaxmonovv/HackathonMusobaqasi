import React, { useEffect, useState } from 'react';
import './AreaList.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/index';
import { IoPersonCircleOutline } from 'react-icons/io5';
import path2 from "../../assets/imgs/path2.jpg";
const AreaList = () => {
    const [areaData, setAreaData] = useState(null);
    const navigate = useNavigate();

    
  useEffect(() => {
    axios.get(`/area/`)
      .then(response => {
        setAreaData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);


  let list = areaData?.map((areaData) =>(
  <>
    <div className="type">
    <div className="type-one">
      <h1>TYPE OF RACE</h1>
      <p>{areaData.area_location}</p>  <br />
      <p>{areaData.area_description}</p>
    </div>
    <div className="type-two">
      <button>{areaData.id}</button>
      <h1>LINE</h1>
    </div>
    {/* <div className="type-three">
      <button>02</button>
      <h1>ROUND</h1>
    </div> */}
  </div>
  <div className="type-img">
    {
areaData.area_image ? 
<Link to={'/map'}> <img src={path2} alt="" /></Link>
:
<img src={areaData.race_type_image} alt="" />
    }
  </div>
  </>
  ))
    return (
        <div className="Path">
        <div className="container">
          <div className="path">
            <div className="start">
              <div className="back">
                <button onClick={() =>navigate(-1)}>Back</button>
                <IoPersonCircleOutline className="icons" />
              </div>
              <div className="logo">
                <h2>UZBEKISTAN</h2>
              </div>
            </div>
            <div className="finish">
            {/* <div className="type">
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
              </div> */}
              {list}
            </div>
          </div>
        </div>
      </div>
    );
}

export default AreaList;
