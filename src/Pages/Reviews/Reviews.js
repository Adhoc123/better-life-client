import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const Reviews = ({review, handleDelete}) => {
    const {_id, reviewerImage, reviewerName, reviewText} = review; 
    const {user} = useContext(AuthContext);
    // console.log(user)
     console.log(review)
   
    return (
           
        <div className="card lg:card-side bg-base-100 shadow-xl m-5">
        <figure><img src={reviewerImage} className='w-10 m-5' alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{reviewerName}</h2>
          <p>{reviewText}</p>
          {
             
          }
          <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
            
    );
};

export default Reviews;