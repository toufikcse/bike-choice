import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Explorebike.css';

const Explorebike = () => {
    const [bikes, setBike] = useState([]);
    useEffect(() => {
        fetch('https://guarded-ocean-22466.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])

    console.log(bikes);
    return (
        <div >
            <Header></Header>
            <h1 className="bike-cl">Bikes Collections</h1>
            <div className="container">
                <div className="row">
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>
                        )
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Explorebike;