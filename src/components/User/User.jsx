import React, { useState } from 'react';
import './User.css';
import Header from '../Header/Header';

import username_icon from '../assets/username.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const User = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="header">
                    <div className="text">User</div>
                    <div className="underline"></div>
                </div>
                <div className="user">
                    <div className="username">
                        <img src={username_icon} alt="" />
                        <p>Username</p>
                    </div>
                    <div className="email">
                        <img src={email_icon} alt="" />
                        <p>email@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;
