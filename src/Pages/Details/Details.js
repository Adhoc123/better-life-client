import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Contexts/UserContext';

const Details = () => {
    const {_id, name, picture, description, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user)

    ////Handling review section

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const img = user?.photoURL;
        const email = user?.email;
        const review = form.review.value;
        console.log(name, img, review, email);
        
        ///Reviewer info section

        const reviewInfo = {
            serviceId: _id,
            reviewerImage: img,
            reviewerName: name,
            reviewerEmail: email,
            reviewText: review

        }
        ///Posting review to Database
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                // alert('Data Saved Successfully')
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }
    
    return (
        <div className="card w-full bg-base-100 shadow-xl">
          {/* adding photo viewer */}
            <PhotoProvider>
            <PhotoView src={picture}>
            <figure><img src={picture} alt="Service" /></figure>
            </PhotoView>
            </PhotoProvider> 

           {/* Showing data in details*/}
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl text-primary-600'>Price: {price}</p>
                <div className="card-actions justify-end">
                <Link to='/totalservices'>
                <button className="btn btn-primary">Back To</button>
                </Link>
                </div>
            </div>
            {/* Review Section */}
            
            <form onSubmit={handleReview} className='w-1/2 m-5'>
                <textarea name='review' className="textarea textarea-info w-full h-52 " placeholder="Write Your Review" required></textarea>
                <input type='submit' value='Submit' className='btn btn-primary'/>
            </form>
            
        </div>
       
    );
};

export default Details;