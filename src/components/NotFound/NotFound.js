import React from 'react';
import error from '../../slider/404.jpg';
import Header from '../Header/Header';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <img style={{ width: '100%', height: '600px' }} src={error} alt="" />
        </div>
    );
};

export default NotFound;