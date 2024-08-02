import { IoCaretBack } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import axios from "../../api/index";
import "./Cars.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() =>{
    axios
    .get("/car/")
   .then(response => setCars(response.data))
   .catch(error => console.log(error)); 
  },[])

  let list = cars?.map(car =>(
    <div className="gm-title-top" key={car.id}>
  <Link to={`/cars/${car.id}`}>  <h3>{car.car_model}</h3></Link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad
    </p>
    {
      car?.car_image   ?
      <img src="https://w7.pngwing.com/pngs/787/429/png-transparent-lightning-mcqueen-mater-doc-hudson-cars-cars-3-red-lightning-mcqueen-car-desktop-wallpaper-pixar-thumbnail.png" alt="" />
      :
      <img src={car.car_image} alt="" />
    }
  
  </div>
  ))
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
         {list}
        
        </div>
      </div>
    </div>
  );
};

export default Cars;

