import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Card from './Card';
import { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ServiceDetails = () => {
    const [services, setServices] = useState([])
    const service = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(service)
    const { _id, img, title, description, facility, price } = service;
    return (
        <div>
            <Banner img={img} title={title}></Banner>
            <div className='mt-32 grid lg:grid-cols-3 grid-cols-1 gap-5'>
                <div className='lg:col-span-2 space-y-7'>
                    <img src={img} alt="" />
                    <h2 className='text-4xl font-bold'>{title}</h2>
                    <p className='text-base font-normal capitalize'>{description}</p>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            facility.map((facilities, index) => <Card key={index} facilities={facilities}></Card>)
                        }
                    </div>
                </div>
                <div className='space-y-7'>
                    <div className='bg-[#F3F3F3] w-full p-5 h-fit'>
                        <h2 className='text-2xl font-bold mb-9'>Services</h2>
                        <div className='flex flex-col gap-5 '>
                            {
                                services.map(service => <Link key={service._id} to={`/serviceDetails/${service._id}`}><button className='btn btn-accent w-full flex justify-between items-center'>{service.title} <FaArrowRight></FaArrowRight></button></Link>)
                            }
                        </div>
                    </div>
                    <div className='px-5'>
                        <h1 className='text-3xl font-bold'>Price : {'$ ' + price}</h1>
                    </div>
                    <div className='px-5'>
                        <Link to={`/checkout/${_id}`}><button className='btn btn-accent btn-block'>Proceed Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;