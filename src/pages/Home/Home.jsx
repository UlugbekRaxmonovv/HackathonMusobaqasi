import React from 'react';
import './Home.scss'
import { FaRegCircleUser } from "react-icons/fa6";
import rasm from '../../assets/imgs/Cars.jpg'
import rasm1 from '../../assets/imgs/map.png'
import rasm2 from '../../assets/imgs/race.jpg'
import rasm3 from '../../assets/imgs/users.webp'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
       <div className="hammsi">
        <div className="als">
          <div className="container">
          <div className="home_all">
           <Link to={'/'}> <FaRegCircleUser/></Link>
            </div>
           <div className="home">
          
            <div className="home_all">
            <h1>Need For Speed</h1>
            <h5>Uzbekistan</h5>
            </div>
           </div>

           <div className="column">
           <div className="column_all">
               <img src={rasm1} alt="" />
               <Link to={'/race'}> <p>Area</p></Link>
            </div>
            <div className="column_all">
               <img src={rasm2} alt="" />
               <Link to={'/arealist'}> <p>Race</p></Link>
            </div>
            <div className="column_all">
               <img src={rasm} alt="" />
               <Link to={'/cars'}> <p>Cars</p> </Link>
            </div>
            <div className="column_all">
               <img src={rasm3} alt="" />
               <Link to={'/users'}> <p>Users</p></Link>
            </div>
           </div>
       </div>
 
       </div>
       </div>
    );
}

export default Home;
