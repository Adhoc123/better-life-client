import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleReview = ({review,handleDelete,handleEdit}) => {
    const {_id, name, reviewerImage, reviewerName, reviewText} = review;
    console.log(review)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-5">
        <figure><img src={reviewerImage} className='w-20 m-5 h-40 rounded' alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title mt-5">{reviewerName}</h2>
          <h2><strong>Service Name:</strong> {name}</h2>
          <p><strong>Review:</strong> {reviewText}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete     
            <ToastContainer />
            </button>
            <button onClick={()=>handleEdit(_id)} className="btn btn-primary">Edit
            <ToastContainer />
            </button>
          </div>
        </div>
        </div>
    );
};

export default SingleReview;