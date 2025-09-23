import React, { useState, useEffect } from 'react';
import './Login.css';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import axios from "axios";

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [errorMessage, setErrorMessage] = useState("");
        const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("id") != "") {
            sessionStorage.setItem("id", "");
            window.location.href = window.location.origin + "/login"
        }
    }, [])

    // handle form submission
    const login = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        let login_url = window.location.origin + "/users/login";

        // check for empty fields
        if (!email || !password) {
            setErrorMessage("Please provide all fields.");
            setLoading(false);
            return;
        }

        axios.post("http://localhost:5000/user/login", {
            email: email,
            password: password,
        })
        .then(function (res) {
            if (res.data.success) {
                sessionStorage.setItem('id', res.data._id);
                window.location.href = window.location.origin + "/user";
            }
            setLoading(false);
        })
        .catch(function (error) {
            if (error.response)
                setErrorMessage(error.response.data.message);
            else
                setErrorMessage("500: Server Error.");
            setLoading(false);
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
                {loading ? (
                    <Spinner/>
                ) : (
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
                )}
            </div>
        </div>
    )
};

export default Login;
