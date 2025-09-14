import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header';
import axios from "axios";

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [errorMessage, setErrorMessage] = useState("");

    // handle form submission
    const login = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        let login_url = window.location.origin + "/users/login";

        axios.post("http://localhost:5000/users/login", {
            email: email,
            password: password,
        })
        .then(function (res) {
            console.log(res);
            if (res.data.success) {
                sessionStorage.setItem('email', email);
                window.location.href = window.location.origin;
            }
            console.log("Success:", res.data.success);
            console.log("Message:", res.data.message);
        })
        .catch(function (error) {
            setErrorMessage(error.response.data.message);
            console.log("Success:", error.response.data.success);
            console.log("Message:", error.response.data.message);
        })
    };

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <form className="inputs" onSubmit={login}>
                    <div className="input">
                        <img src={email_icon} alt="Email" />
                        <input type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password" />
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="errorMessage">{errorMessage}</div>
                    <input className="submit" type="submit" value="Login"/>
                </form>
            </div>
        </div>
    )
};

export default Login;
