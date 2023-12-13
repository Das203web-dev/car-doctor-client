import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(services)
    return (
        <div className='space-y-5'>
            <h1 className='text-xl font-bold text-center'>service</h1>
            <h2 className='text-4xl font-bold text-center'>Our Service Area</h2>
            <p className='text-center w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;