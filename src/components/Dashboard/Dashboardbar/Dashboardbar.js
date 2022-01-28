import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboardbar.css';



const Dashboardbar = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://guarded-ocean-22466.herokuapp.com/findadmin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data[0]?.role == 'admin') {
                    setAdmin(true);
                }
                else {
                    setAdmin(false);
                }
            })
    }, [user?.email])

    return (
        <div>
            <ul className="navbar-nav ">
                <li className="nav-item item-size">
                    <Link className="nav-link active text-white" to={`${url}/pay`}>Pay</Link>
                </li>

                <li className="nav-item item-size">
                    <Link className="nav-link text-white" to={`${url}/myorder`}>My Order</Link>
                </li>
                <li className="nav-item item-size">
                    <Link className="nav-link text-white" to={`${url}/review`}>Review</Link>
                </li>
                <br />
                <br />

                {admin && <span>
                    <li className="nav-item item-size">
                        <Link className="nav-link text-white" to={`${url}/manageallorder`}>Manage All Order</Link>
                    </li>
                    <li className="nav-item item-size">
                        <Link className="nav-link text-white" to={`${url}/addproduct`}>Add Product</Link>
                    </li>
                    <li className="nav-item item-size">
                        <Link className="nav-link text-white" to={`${url}/makeadmin`}>Make Admin</Link>
                    </li>
                    <li className="nav-item item-size">
                        <Link className="nav-link text-white" to={`${url}/manageproduct`}>Manage Products</Link>
                    </li>
                </span>
                }

                <br />
                {user.email && <li className="nav-item item-size">
                    <button className="lg-out" onClick={logOut}>Log Out</button>
                </li>}







            </ul>

        </div>
    );
};

export default Dashboardbar;