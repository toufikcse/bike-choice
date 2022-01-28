import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {

    return (
        <div className="color-back">
            <Header></Header>
            <div className="about-container">
                <h1 className="welcome-color">Welcome</h1>
                <h2>Thank you so much, for visiting our website</h2>
                <h5 className="descirption"> Our Bike Choice very famous in dhaka. Many kinds of tests are done here. Engine & Performance: The Honda CB125R runs on a 125cc single-cylinder, programmed FI engine. The motor churns out 15 PS of maximum power at 10,000 RPM and 12 Nm of peak torque at 8,000 RPM. ... Its engine is liquid-cooled and it comes mated to a 6-speed gearbox like the bigger CBR 150.</h5>

                <h4>
                    If you have question please contact with us or Email: <span className="mail-color">bikechoice@gmail.com</span>
                </h4>
                <h5>
                    Address : 3rd flor, Shah-Ali Plaza, Dhanmondi-32, Dhaka-1216.
                </h5>
                <h5>Mobile : 01723780934, 01923780934</h5>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;