import React, { useEffect, useState } from 'react';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    console.log(reviews)
    return (
        <div>
            <h1>{reviews.length}</h1>
        </div>
    );
};

export default MyReviews;