import React from 'react';
import './Singlereview.css';

const Singlereview = (props) => {
    const { name, review } = props.review;

    return (
        <div class="card my-3">
            <div class="card-header">
                <h4>User : {name}</h4>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{review}</p>

                </blockquote>
            </div>
        </div>
    );
};

export default Singlereview;