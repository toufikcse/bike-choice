import React from 'react';
import { useState } from 'react';
import './Makeadmin.css';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const Makeadmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const { reset } = useForm();
    const handleAdminSubmit = e => {
        const user = { email };
        fetch("https://guarded-ocean-22466.herokuapp.com/adduser/admin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),

        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount) {
                    // alert('Order Successfully Completed');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin Successfully Added',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    reset();
                }
                console.log(res);
            })

        e.preventDefault()
    }
    return (
        <div className="makeadmin">
            <form onSubmit={handleAdminSubmit}>
                <input type="email"
                    onBlur={handleOnBlur}
                    placeholder="Type an Email"
                />

                <button className="button-cl" type="submit">Make Admin</button>
            </form>
        </div>
    );
};

export default Makeadmin;