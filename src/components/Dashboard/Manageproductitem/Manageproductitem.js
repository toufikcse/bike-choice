import React from 'react';
import Swal from 'sweetalert2';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Manageproductitem = props => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth();
    const { _id, img, name, description, price } = props.bike;
    // const url = `/dashboard/myorder/${_id}`;

    const handleDeleteUser = () => {
        const procced = window.confirm('Are You sure, you want to delete?');

        if (procced) {
            fetch(`https://guarded-ocean-22466.herokuapp.com/dashboard/manageproduct/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(res => {
                    if (res.deletedCount > 0) {
                        // alert('Product Added Successfully');
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Delete Successfully',
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }
                    console.log(res);
                })
        }
    }
    return (
        <div className="card col-lg-4 col-sm-6 col-12 p-3 my-3 cardsz border bg-light">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{description}</p>
                <h5 className="card-title">Price : ${price}</h5>
            </div>
            <div className="card-footer">
                <Link to={"/dashboard"}><button onClick={() => handleDeleteUser()} className="button-cl">Delete Order</button></Link>
            </div>
        </div >
    );
};

export default Manageproductitem;