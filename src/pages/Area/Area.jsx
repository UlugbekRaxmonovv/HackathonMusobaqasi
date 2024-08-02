import React,{useState,useEffect} from 'react';
import "./Path.scss";
import { IoPersonCircleOutline } from "react-icons/io5";
import path2 from "../../assets/imgs/path2.jpg";
import axios  from '../../api/index';
import {useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Area = () => {
  const { areaLocation } = useParams();
  const [areaData, setAreaData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/race-type/?area=${areaLocation}`)
      .then(response => {
        setAreaData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, [areaLocation]);


  let list = areaData?.map((areaData) =>(
  <>
    <div className="type">
    <div className="type-one">
      <h1>TYPE OF RACE</h1>
      <p>{areaData.race_type}</p>
    </div>
    <div className="type-two">
      <button>{areaData.race_type_area}</button>
      <h1>LINE</h1>
    </div>
    {/* <div className="type-three">
      <button>02</button>
      <h1>ROUND</h1>
    </div> */}
  </div>
  <div className="type-img">
    {
areaData.race_type_image ? 
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

export default Area;
