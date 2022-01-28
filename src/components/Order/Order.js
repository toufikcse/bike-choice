import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './Order.css';
import useFirebase from '../../hooks/useFirebase';
import Swal from 'sweetalert2'

const Order = () => {
    const { user } = useFirebase();
    const { bikeId } = useParams();
    const [bike, setBike] = useState({})

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.productId = _id;
        data.email = user.email;
        data.customerName = user.displayName;
        data.img = img;
        data.name = name;
        data.description = description;
        data.price = price;
        data.date = Date();
        console.log(data);


        fetch("https://guarded-ocean-22466.herokuapp.com/customerorder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    // alert('Order Successfully Completed');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Order Completed Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    reset();
                }
                console.log(res);
            })
    }

    useEffect(() => {
        fetch('https://guarded-ocean-22466.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {

                let result = data.find(bike => bike._id == bikeId);

                setBike(result);
            })

    }, [bikeId])

    const { _id, img, name, description, price, specification, feature } = bike;

    return (
        <div >

            <Header></Header>

            <div  >
                <div className="d-flex">
                    <div className="card-style">
                        <img src={img} alt="image" />
                        <h1 >{name}</h1>
                        <p >{description}</p>
                        <h3>Price : ${price}</h3>
                        {/* <Link to=""><button className="button-cl">Add Order</button></Link> */}
                    </div>
                    <div className="card-style">
                        <div className="m-5 addorder">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* <label htmlFor="name">Name</label> */}

                                <input type="text" {...register("city", { required: true, maxLength: 20 })} placeholder="City"
                                />
                                <textarea type="text" {...register("address")} placeholder="Full Address"
                                />
                                <input type="number" {...register("zip")} placeholder="Zip Code" />

                                <input type="number" {...register("mobile")} placeholder="Mobile Number"
                                />


                                <button className="button-cl" type="submit">Confirm Order</button>


                            </form>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-6" >
                        <img style={{ width: "500px", height: "700px" }} src={specification} alt="image" />
                    </div>
                    <div class="col-lg-6">
                        <img style={{ width: "500px", height: "500px" }} src={feature} alt="image" />
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Order;