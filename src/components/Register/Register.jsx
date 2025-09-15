import React, { useState } from 'react';
import './Register.css';
import Header from '../Header/Header';
import axios from "axios";

import username_icon from '../assets/username.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Register = () => {
    // state variables for form inputs
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    // handle form submission
    const register = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        let register_url = window.location.origin + "/users/register";

        axios.post("http://localhost:5000/user/register", {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
        .then(function (res) {
            if (res.data.success) {
                sessionStorage.setItem('id', res.data.data._id);
                window.location.href = window.location.origin;
            }
        })
        .catch(function (error) {
            if (error.response)
                setErrorMessage(error.response.data.message);
            else
                setErrorMessage("500: Server Error.");
        })
    };

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="header">
                    <div className="text">Register</div>
                    <div className="underline"></div>
                </div>
                <form className="inputs" onSubmit={register}>
                    <div className="input">
                        <img src={username_icon} alt="Username" />
                        <input type="text" name="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="Email" />
                        <input type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password" />
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Confirm password" />
                        <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="errorMessage">{errorMessage}</div>
                    <input className="submit" type="submit" value="Register"/>
                </form>
            </div>
        </div>
    )
};

export default Register;
