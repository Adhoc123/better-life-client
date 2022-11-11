import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner';
const Services = () => {
    const {loading} = useContext(AuthContext);
    const [services, setServices] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    services.sort((a, b) => b - a);
    console.log(services)
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
            <div className='grid justify-items-center m-7'>
               <Link to='/totalservices'><button className='btn btn-primary '>See All</button></Link>
            </div>
        </div>
    );
};

export default Services;