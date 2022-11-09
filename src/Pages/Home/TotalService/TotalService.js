import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const TotalService = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/totalservices')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            
            <div className='text-center m-5 mt-10'>
              <p className='text-5xl font-bold'>All Services</p>
            </div>
            <div className='ml-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5'>
                {
                     items.map(item=><Card
                     key={item._id}
                     item={item}
                     ></Card>)
                }
            </div>
        </div>
    );
};

export default TotalService;