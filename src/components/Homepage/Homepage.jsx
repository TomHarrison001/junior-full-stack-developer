import React from 'react';
import './Homepage.css';
import Header from '../Header/Header';

import coffee_image from '../assets/coffee.png';

const Homepage = () => {
    return (
        <div>
            <Header/>
            <div className="homepage-container">
                <div className="header">
                    <div className="text">Homepage</div>
                    <div className="underline"></div>
                    <div className="content">
                        <img src={coffee_image} alt="Coffee" />
                        <div className="about">
                            <p>
                                Hi, I’m Tom 👋
                            </p>
                            <p>
                                I have recently finished studying Computer Games Programming BSc (Hons) at De Montfort University, achieving a First-Class Honours, while working as a freelance programmer.
                            </p>
                            <p>
                                Since finishing university, I have completed the IBM Full Stack Software Developer learning path which consisted of 15 courses.
                            </p>
                            <p>
                                Skills: Python, C#, C++, Java, HTML, CSS, JavaScript, and more.
                            </p>
                            <p>
                                👀 I’m interested in programming, game development and web development
                            </p>
                            <p>
                                🌱 I’m currently learning Cloud Computing
                            </p>
                            <p>
                                💻 I'm an aspiring Full Stack Developer
                            </p>
                            <p>
                                GitHub: https://github.com/tomHarrison001
                            </p>
                            <p>
                                Website: https://rockafelladev.co.uk
                            </p>
                            <p>
                                YouTube: https://youtube.com/@rockafelladev
                            </p>
                            <p>
                                Credly: https://www.credly.com/users/tom-harrison001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;
