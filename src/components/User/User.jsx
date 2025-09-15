import React, { useState, useEffect } from 'react';
import './User.css';
import Header from '../Header/Header';
import axios from "axios";

import username_icon from '../assets/username.png';
import email_icon from '../assets/email.png';

const User = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        if (id != "" && id != undefined) {
            axios.get(`http://localhost:5000/user/${id}`)
            .then(function (res) {
                if (res.data.success) {
                    setUsername(res.data.data.username);
                    setEmail(res.data.data.email);
                }
            })
            .catch(function (error) {
                if (error.response)
                    console.log(error.response.data.message);
                else
                    console.log("500: Server Error.");
            })
        } else {
            setUsername("Username");
            setEmail("Email");
        }
    }, [])

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
                        <img src={username_icon} alt="Username" />
                        <p>{username}</p>
                    </div>
                    <div className="email">
                        <img src={email_icon} alt="Email" />
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;
