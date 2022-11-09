import React from 'react';

const Card = ({service}) => {
    const {price, picture, name, description, email} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Service" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description.slice(0,100)} . . .</p>
            <p className='text-2xl text-primary-600'>{price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default Card;