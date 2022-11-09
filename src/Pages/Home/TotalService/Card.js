import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const {_id, price, picture, name, description, email} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Service" /></figure>
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