import { IoCaretBack, IoPersonCircleSharp } from "react-icons/io5";
import kottaBola from '../../assets/imgs/kotta-bola.webp';
import './CarsSingle.scss'
import { useParams } from "react-router-dom";
import axios  from "../../api/index";
import { useEffect, useState } from "react";

const CarsClick = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  console.log(car);
  useEffect(() =>{
    axios
    .get(`/car/${id}/`)
   .then(response => setCar(response.data))
   .catch(error => console.log(error));
  })


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
            <h1>{car?.car_model}</h1>
            <div className="left-bottom">
              <p>
                POWER <span>{car?.car_horse_power}</span>
              </p>
              <p>
                COLOR <span>{car?.car_color}</span>
              </p>
              <p>
                WEIGHT <span>{car?.car_weight}</span>
              </p>
              <p>
                SPEED <span>{car?.car_max_speed}</span>
              </p>
              <p>
                BALANCE <span>{car?.car_balance}</span>
              </p>
            </div>
          </div>
          <div className="right">
            {
              car?.car_image ? 
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeij2J2D4EGAL09LRODhPm5nJJcIg6-yR-Tw&s" alt="" />
              :
              <img src={car?.car_image } alt="" />

            }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsClick;
