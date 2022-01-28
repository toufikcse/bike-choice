import React from 'react';
import { useForm } from "react-hook-form";
import './Addproduct.css';
import Swal from 'sweetalert2'

const Addproduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.date = Date();
        console.log(data);


        fetch("https://guarded-ocean-22466.herokuapp.com/addbike", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    // alert('Product Added Successfully');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Order Completed Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    reset();
                }
                console.log(res);
            })
    }

    return (
        <div>
            <div className="m-5 addproduct">
                <h1>Please Add a Product</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <label htmlFor="name">Name</label> */}
                    <input {...register("img")} placeholder="Image url" />
                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                    <textarea type="text" {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("specification")} placeholder="specification url" />
                    <input {...register("feature")} placeholder="feature url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Addproduct;