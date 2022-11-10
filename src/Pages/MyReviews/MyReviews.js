import React, { useEffect, useState } from 'react';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://better-life-server.vercel.app/reviews')
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