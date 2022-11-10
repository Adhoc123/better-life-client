import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({service}) => {
    const {_id, price, picture, name, description, email} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
        <PhotoView src={picture}>
        <figure><img src={picture} alt="Service" /></figure>
        </PhotoView>
        </PhotoProvider>    
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description.slice(0,100)} . . .</p>
            <p className='text-2xl text-primary-600'>Price: {price}</p>
            <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Card;