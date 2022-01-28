import React, { useEffect, useState } from 'react';
import Singlereview from '../Singlereview/Singlereview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://guarded-ocean-22466.herokuapp.com/getreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div >
            {
                reviews.map(review => <Singlereview
                    key={review._id}
                    review={review}
                ></Singlereview>
                )
            }
        </div>
    );
};

export default Reviews;