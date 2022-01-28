import React, { useEffect, useState } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Reviews from '../Reviews/Reviews';
import Bike from '../Bike/Bike';

const Home = () => {

    const [bikes, setBike] = useState([]);
    useEffect(() => {
        fetch('https://guarded-ocean-22466.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBike(data))

    }, [])

    const bike = bikes.slice(6, 12);

    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h1 className="home-serv">Latest Bikes</h1>
            <div className="container ">
                <div className="row g-4">
                    {
                        bike.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>
                        )
                    }

                </div>

            </div>


            {/* For customer reviews */}
            <div className="cs-reviews">
                <h1>Customer Reviews</h1>
                <Reviews></Reviews>
            </div>

            {/* Subscribe secsion */}
            <div className="subscrib-m">
                <h1>Subscribe To Our 'Bike Choice' For Latest Update</h1>
                <div>
                    <div className="dis-f">
                        <input type="text" className="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary color" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Home;