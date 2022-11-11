import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Contexts/UserContext';
import SingleReview from './SingleReview';
import './rev.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(user)
    ////fetching data based on user mail for filter
    useEffect(()=>{
        fetch(`https://better-life-server.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    ///deleting specific user id
    const handleDelete = _id =>{
        const proceed = window.confirm('Want to delete?');
        fetch(`https://better-life-server.vercel.app/reviews/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                {/* The button to open modal */}
                
                const remaining = reviews.filter(rev => rev._id!==_id);
                setReviews(remaining);
                {toast("Review Deleted Successfully.")}
            }
        })
    }
    const handleEdit = _id =>{
         
    }   
    return (
        
        <div>
            {
                reviews.length<=0?
                <h1 className='middle'>No reviews found</h1>
                :
                reviews.map(review=><SingleReview
                review={review}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                ></SingleReview>)
            }
        </div>
    );
};

export default MyReviews;