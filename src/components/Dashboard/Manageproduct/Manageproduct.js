import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Manageproductitem from '../Manageproductitem/Manageproductitem';

const Manageproduct = () => {
    const [bikes, setBike] = useState([]);
    useEffect(() => {
        fetch('https://guarded-ocean-22466.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])

    console.log(bikes);
    return (
        <div >
            <h1 className="bike-cl">Bikes Collections</h1>
            <div className="container">
                <div className="row">
                    {
                        bikes.map(bike => <Manageproductitem
                            key={bike._id}
                            bike={bike}
                        ></Manageproductitem>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Manageproduct;