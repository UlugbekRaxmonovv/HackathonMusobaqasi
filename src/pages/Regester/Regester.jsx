import React, { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { Form, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import rasm from '../../assets/imgs/img.png'
import { useFormInputValue } from '../../components/hook/useFormInputValue';
import axios from '../../components/api/index';

const initialState ={
    username: '',
    email: '',
    password: ''
}
const Regester = () => {
    const navigate = useNavigate()
    const {handelChange,setValue,value} = useFormInputValue(initialState)
    console.log(value);
    const [file,setFale]  = useState(null)
    const [data,setData]= useState([])
    console.log(data);
     
    const handleUserName = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append('username', value.username);
        form.append('email', value.email);
        form.append('password', value.password);
        if (file) {
            for (let i = 0; i < file.length; i++) {
                form.append("image", file[i], file[i].name);
            }
        }
        axios.post('/register/', form)
            .then(response => {
                setData(response.data);
                setFale(initialState)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="login">
        <div className="als">
            <div className="container">
                 <div className="form">
                 <div className="login_all">
                     <h1>Sign Up</h1>
                       <form action="" onSubmit={handleUserName}>
                        <div className="inputw">
                         <FaUser/>
                         <div className="inputs">
                             <input type="text" placeholder='UserName' value={value.username} onChange={handelChange}  name='username' />
                         </div>
                        </div>
                       
                        <div className="inputw">
                         <MdEmail/>
                         <div className="inputs">
                             <input type="text" placeholder='Phone/Email'  value={value.email} onChange={handelChange} name='email' />
                         </div>
                        </div>

                        <div className="inputw">
                         <RiLockPasswordFill/>
                         <div className="inputs">
                             <input type="text" placeholder='password'  value={value.password} onChange={handelChange} name='password' />
                         </div>
                        </div>
                        <div className="inputw">
                        <img src={rasm} alt="" />
                         <div className="inputs">
                             <input type="file" onChange={(e) => setFale(e.target.files)} multiple accept='image/*' placeholder='Image' />
                         </div>
                        </div>
                        <div className="inputss">
                        <div className="inputs">
                             <button>Create account</button>
                         </div>
                         <div className="inputs">
                           <p onClick={() => navigate(-1)}>Already have an account? Login here</p>
                         </div>
     
                        </div>
                       </form>
                 </div>
                 </div>
             </div>
        </div>
            </div>
    );
}

export default Regester;
