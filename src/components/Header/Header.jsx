import React, { useState, useEffect } from 'react';
import './Header.css';
import axios from "axios";

const Header = () => {
    const [username, setUsername] = useState("");
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        console.log(id)
        if (id == "" || id == undefined) {
            setSignedIn(false);
            return;
        }
        axios.get(`http://localhost:5000/user/${id}`)
        .then(function (res) {
            setSignedIn(res.data.success)
            setUsername(res.data.data.username)
        })
        .catch(function (error) {
            setSignedIn(false);
        })
    }, [])

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <h2>Company Name</h2>
                    <div className="lists">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a className="nav-link" href={signedIn ? "/" : "/register"}>{signedIn ? username : "Register"}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">{signedIn ? "Logout" : "Login"}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
