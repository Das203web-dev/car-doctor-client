import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl rounded-none">
            <figure><img className="h-[300px] p-4" src={service.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <div className="card-actions justify-between items-center">
                    <p>price : {service.price}</p>
                    <Link to={`/serviceDetails/${service._id}`}><button className="btn btn-accent">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;