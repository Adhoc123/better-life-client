import React, { useEffect, useState } from 'react';
import Card from './Card';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center m-5 mt-10'>
              <p className='text-5xl font-bold'>My Services</p>
            </div>
            <div className='ml-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5'>
                {
                     services.map(service=><Card
                     key={service._id}
                     service={service}
                     ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;