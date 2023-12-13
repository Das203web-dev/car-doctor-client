import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Provider/Provider';
import Banner from '../../components/Banner';
import orderImg from '../../../assets/images/banner/4.jpg'
import OrderCard from './OrderCard/OrderCard';

const Orders = () => {
    const { user } = useContext(Context);
    const [orderData, setOrderData] = useState([]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = orderData.filter(remainingData => remainingData._id !== id);
                    setOrderData(remaining)
                }
            })
    }
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [user])
    const pageTitle = "Orders"
    return (
        <div>
            <Banner img={orderImg} title={pageTitle}></Banner>
            <div className='mt-32 flex flex-col gap-5'>
                {
                    orderData.map(data => <OrderCard handleDelete={handleDelete} key={data._id} data={data}></OrderCard>)
                }
            </div>
        </div>
    );
};

export default Orders;