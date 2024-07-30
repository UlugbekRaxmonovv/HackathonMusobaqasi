import React from 'react';
import './Users.scss'
import { FaCaretLeft } from "react-icons/fa6";
const Users = () => {
    return (
        <div className="users_row">
           
            <div className="container">
           <div className="btn_r">
          <div className="back">
          <div className="btn_f">
                <button>BACK</button>
            </div>
            <div className="btn_f">
               <FaCaretLeft/>
            </div>
          </div>
          <h1>Uzbekistan</h1>
           </div>
              <h2> Users</h2>
            </div>
            <div className="cars_row">

                <div className="container">
                    <div className="column">
                    <div className="hammasi_w">
                       <div className="column_all">
                        </div>
                        <h1>John Doe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit odit itaque nostrum minima perferendis modi corporis maxime. Nostrum voluptas dicta minus odit aliquid! Earum ducimus quo maiores natus voluptatum!</p>
                       </div>
                    
                       <div className="hammasi_w">
                       <div className="column_all">
                        </div>
                        <h1>John Doe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit odit itaque nostrum minima perferendis modi corporis maxime. Nostrum voluptas dicta minus odit aliquid! Earum ducimus quo maiores natus voluptatum!</p>
                       </div>
                       <div className="hammasi_w">
                       <div className="column_all">
                        </div>
                        <h1>John Doe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit odit itaque nostrum minima perferendis modi corporis maxime. Nostrum voluptas dicta minus odit aliquid! Earum ducimus quo maiores natus voluptatum!</p>
                       </div>
                       <div className="hammasi_w">
                       <div className="column_all">
                        </div>
                        <h1>John Doe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit odit itaque nostrum minima perferendis modi corporis maxime. Nostrum voluptas dicta minus odit aliquid! Earum ducimus quo maiores natus voluptatum!</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
