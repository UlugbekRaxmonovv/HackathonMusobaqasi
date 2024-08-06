import React, { useEffect, useState } from 'react';
import './Users.scss';
import { FaCaretLeft } from "react-icons/fa6";
import axios from '../../api/index';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Add error state
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoading(true);
        axios.get('/user-list/')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // Add empty dependency array to run once on mount

    const list = users.slice(0, 4).map((user) => (
        <div className="hammasi_w" key={user.id}>
            <div className="column_all">
            <img src={user.image} alt="" /> 
              
            </div>
            <Link to={`/user/${user.id}`}> 
                <h1>{user.username}</h1>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit odit itaque nostrum minima perferendis modi corporis maxime. Nostrum voluptas dicta minus odit aliquid! Earum ducimus quo maiores natus voluptatum!</p>
        </div>
    ));

    return (
        <div className="users_row">
            <div className="container">
                <div className="btn_r">
                    <div className="back">
                        <div className="btn_f">
                            <button onClick={() => navigate(-1)}>BACK</button>
                        </div>
                        <div className="btn_f">
                            <FaCaretLeft />
                        </div>
                    </div>
                    <h1>Uzbekistan</h1>
                </div>
                <h2> Users</h2>
            </div>
            <div className="cars_row">
                <div className="container">
                    {loading ? 
                    <div className="loa">
                        <div className="loading" />
                        <div className="loading" />
                        <div className="loading" />
                        <div className="loading" />
                    </div>
                    : null}
                    <div className="column">
                        {list}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
