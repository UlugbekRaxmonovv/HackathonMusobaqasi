import React, { useEffect, useState, memo } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import "./Race.scss";
import axios from '../../api/index';
import { Link, useNavigate } from 'react-router-dom';

const Race = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/area/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []); // Add dependency array to run useEffect only once on mount

  const list = data.map((data) => (
    <div className="two-first" key={data.id}>
      <div className="first-one">
        {data.area_image ? (
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaG0IETfzpPPtSBgIZGr2P57YGKBVZjZ2nDHniatGvesdsQAov8mAejbXHD6EvHtIdGq4&usqp=CAU' alt="" />
        ) : (
          <img src={data.area_image} alt="" />
        
        )}
      </div>
      <div className="first-two">
        <Link to={`/area/${data.area_location}`} state={{ areaLocation: data.area_location }}>
          <h2>{data.area_location}</h2>
        </Link>
        <p>{data.area_description}</p>
      </div>
    </div>
  ));

  return (
    <div className="City">
      <div className="container">
        <div className="city">
          <div className="start">
            <div className="back">
              <button onClick={() => navigate(-1)}>Back</button>
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
              {list}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Race);
