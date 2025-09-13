import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header';

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <form className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="submit">Login</div>
                </form>
            </div>
        </div>
    )
};

export default Login;
