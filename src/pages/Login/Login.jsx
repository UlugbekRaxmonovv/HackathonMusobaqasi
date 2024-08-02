import React, { useState } from 'react';
import './Login.scss'
import rasm from '../../assets/imgs/userimg.png'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useFormInputValue } from '../../components/hook/useFormInputValue';
import axios from '../../api/index';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const initialState ={
    email: '',
    password: ''
}
const Login = () => {
    const [eye,setEye] = useState(false)
    const {handelChange,setValue,value} = useFormInputValue(initialState);
    const navigate = useNavigate();
  

    const handelSubmit = (e) => {
        e.preventDefault();
        let user ={
            email: value.email,
            password: value.password
        }
        axios
        .post('/token/',user)
        .then(res => {
             console.log(res.data?.access)
             setValue(initialState)
             toast.success('Login successful');
             localStorage.setItem('token', res.data?.access)
             navigate('/home')
        })
        .catch(err => {
             console.log(err)
             toast.error('Invalid credentials');
            
        })

    }
    return (
       <div className="login">
   <div className="als">
       <div className="container">
            <div className="form">
            <div className="login_all">
                <img src={rasm} alt="" />
                <h1>Login</h1>
                  <form action="" onSubmit={handelSubmit}>
                   <div className="input">
                    <div className="inputs">
                        <input type="text" placeholder='Email kiritng' value={value.email} onChange={handelChange} name='email' />
                    </div>
                    <MdEmail/>
                   </div>
                   <div className="input">
                    <div className="inputs">
                        <input type= {eye ? "text" : "password"} placeholder='Password kiritng'  value={value.password} onChange={handelChange} name='password'/>
                    </div>
                  {
                    eye  ?  <IoEye onClick={() => setEye(p => !p)}/>
                    :
                     <IoMdEyeOff  onClick={() => setEye(p => !p)}/>
                  }
                   </div>
                   <div className="inputss">
                   <div className="inputs">
                        <button>Submit</button>
                    </div>
                    <div className="inputs">
                      <p><Link to={'/regester'}>Forget Username/</Link> <span>Password?</span></p>
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

export default Login;
