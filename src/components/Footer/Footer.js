import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-h">
            <nav className="text-light footer-bg">
                <div >
                    <h1 >Bike Choice</h1>
                    <p>Bike Choice is Original Japanese showroom for purchasing reliable motorcycles. All of you are invited to our showroom. We have been providing best service for last 5 years </p>
                    <ul class="nav justify-content-center ">
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="/home">Home</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="/explorebike">Explore Bikes</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="contact">Contact</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link text-light" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Footer;