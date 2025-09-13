import React, { useState } from 'react';
import './Register.css';

import username_icon from '../assets/username.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <div className="header">
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={username_icon} alt="" />
                    <input type="text" placeholder='Username'/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Confirm password" />
                </div>
                <div className="submit">Register</div>
            </div>
        </div>
    )
};

export default Register;
