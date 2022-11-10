import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Contexts/UserContext';
import { data } from 'autoprefixer';
import Reviews from '../Reviews/Reviews';

const Details = () => {
    const {_id, name, picture, description, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    // console.log(user)
    const [reviews, setReviews] = useState([]);
    // console.log(reviews)
    ////Handling review section
    const handleDelete = _id =>{
        const proceed = window.confirm('Want to delete?');
        fetch(`http://localhost:5000/reviews/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remaining = reviews.filter(rev => rev._id!==_id);
                setReviews(remaining)
            }
        })
    }
    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const img = user?.photoURL;
        const email = user?.email;
        const review = form.review.value;
        // console.log(name, img, review, email);
        
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
            // console.log(data);
            if(data.acknowledged){
                // alert('Data Saved Successfully')
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

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
            {
                user?.uid?
                <>
                <form onSubmit={handleReview} className='w-1/2 m-5'>
                <textarea name='review' className="textarea textarea-info w-full h-52 " placeholder="Write Your Review" required></textarea>
                <input type='submit' value='Submit' className='btn btn-primary'/>
                </form>
                
                {/* Review data */}
                <div>
                    <div>
                        {
                            reviews.map(review =><Reviews
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            ></Reviews>)
                        }
                    </div>
                </div>
                </>
                :
                <>
                   <h1 className='text-orange-600 font-bold m-5'>Please Login to add a review</h1>
                   {/* Review data */}
                    <div>
                        <div>
                            {
                                reviews.map(review =><Reviews
                                key={review._id}
                                review={review}
                                ></Reviews>)
                            }
                        </div>
                    </div>
                </>
            }
            
        </div>
       
    );
};

export default Details;