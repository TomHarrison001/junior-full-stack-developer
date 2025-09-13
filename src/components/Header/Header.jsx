import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="container">
                    <h2>Company Name</h2>
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
