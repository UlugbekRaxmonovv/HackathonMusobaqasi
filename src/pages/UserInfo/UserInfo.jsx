import React, { useEffect } from 'react';
import './UserInfo.scss'
import { useNavigate } from 'react-router-dom';
import { FaCaretLeft } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import axios from '../../api/index';
const UserInfo = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    useEffect(() =>{
        axios
        .get(`/user-list${id}`)
        .then(res => {
        console.log(res.data)
        })
        .catch(err => console.log(err))
    },[]);
    return (
       <div className="userInfo">
        <div className="container">
        <div className="btn_r">
          <div className="back">
          <div className="btn_f">
                <button onClick={() => navigate(-1)}>BACK</button>
            </div>
            <div className="btn_f">
               <FaCaretLeft/>
            </div>
          </div>
          <h1>Uzbekistan</h1>
           </div>
            <div className="user_info">
              <div className="info_img">
                <div >
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXC1BNfYJFNfmDbxLtjoObSVsDeWfV2WFMwXLHQ5DHzrEwIgi3f8-aA3srjwsYOIbZvew&usqp=CAU" alt="" />
                </div>
                <h1>John</h1>
    <div className="price">
<div className="price_r">
<p>Win:</p>
<p>Car:</p>
<p>Phone:</p>
<p>Balance:</p>
<p>Race:</p>
</div>
<div className="price_r">
<p>26</p>
<p>Onix</p>
<p>+998904991972</p>
<p>123$</p>
<p>3</p>
</div>
    </div>

              </div>
              <div className="info_img">
                 <h1>Onix</h1>
                 <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio possimus dolorem quam blanditiis rerum nemo quibusdam neque maxime, nam, placeat suscipit vel hic cumque minus at temporibus esse perferendis.</h4>
     <div className="car">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeij2J2D4EGAL09LRODhPm5nJJcIg6-yR-Tw&s" alt="" />
     </div>
              </div>
            </div>
        </div>
       </div>
    );
}

export default UserInfo;
