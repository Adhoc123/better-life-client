import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Details = () => {
    const {name, picture, description, price} = useLoaderData();
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
        </div>
    );
};

export default Details;