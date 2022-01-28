import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css'
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { user, handleGoogleSignIn, handleEmailchange, handlePasswordchange, processLogin, handleResetPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName);
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    const userLogIn = e => {
        e.preventDefault();
        processLogin()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            }).catch(error => {
                setError(error.message);
            })
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };

        fetch("https://guarded-ocean-22466.herokuapp.com/adduser", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    // alert('Order Successfully Completed');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User Loged in Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
                console.log(res);
            })
    }

    return (
        <div className="color-back">
            <Header></Header>
            <div >
                <div className="signin ">
                    <h2>Login</h2>
                    <form >
                        <input className="input" onBlur={handleEmailchange} type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input className="input" onBlur={handlePasswordchange} type="password" name="" id="" placeholder="password" />
                        <br />
                        <input className="input" onClick={userLogIn} type="submit" value="Log In" />
                        <br />
                        <input className="input" onClick={handleResetPassword} type="submit" value="Forgot Password" />

                    </form>
                    <br />
                    <Link to="/register">Create Account</Link>
                    <br />
                    <div>----------or--------</div>
                    <br />
                    <button className="btn-regular"
                        onClick={handleGoogleLogIn}
                    >Google Sign In</button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;