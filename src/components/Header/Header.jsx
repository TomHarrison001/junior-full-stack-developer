import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="container">
                    <h2>Company Name</h2>
                    <div className="lists">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                        <ul class="nav-list">
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
