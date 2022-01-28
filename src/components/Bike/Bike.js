import React from 'react';
import { Link } from 'react-router-dom';
import './Bike.css';
const Bike = (props) => {
    const { _id, img, name, description, price } = props.bike;
    const url = `/bike/${_id}`;

    return (

        <div className="card col-lg-4 col-sm-6 col-12 p-3 my-3 card-gap border bg-light">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{description}</p>

            </div>
            <div className="card-footer">
                <h5 className="card-title">Price : ${price}</h5>
            </div>
            <div className="card-footer">
                <Link to={url}><button className="button-cl">Order Now</button></Link>
            </div>
        </div >

    );
};

export default Bike;