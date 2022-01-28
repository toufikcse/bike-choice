import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.name = user.displayName;
        data.date = Date();
        console.log(data);


        fetch("https://guarded-ocean-22466.herokuapp.com/review", {
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
                        title: 'Submit Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    reset();
                }
                console.log(res);
            })
    }

    return (
        <div className="review-form">
            <div className="m-5 ">
                <h3>Please comment your opinion below the comment box</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea type="text" {...register("review")} placeholder="Enter Your Comments"
                    />

                    <button className="buttoncl d-flex" type="submit">Submit</button>


                </form>
            </div>
        </div>
    );
};

export default Review;