import { useContext } from "react";
import { Context } from "../Provider/Provider";
import Banner from "./Banner";
import checkOutImg from '../../assets/images/banner/2.jpg'
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const { user } = useContext(Context);
    const order = useLoaderData();
    const { _id, img, title, price } = order
    // console.log(order)
    const pageTitle = "Check Out";
    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const fName = form.firstName.value;
        const lName = form.lastName.value;
        const email = user?.email;
        const phoneNo = form.phone.value;
        const message = form.textArea.value;
        const date = form.date.value;
        const fullName = fName + " " + lName;
        const orderInfo = { fullName, email, phoneNo, date, message, img, title, price };
        // console.log(orderInfo);
        fetch('http://localhost:5000/orders', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <Banner img={checkOutImg} title={pageTitle}></Banner>
            <div className="hero min-h-fit bg-base-200 mt-32">
                <div className="w-full flex-col p-5">

                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleOrder} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone No</span>
                                    </label>
                                    <input type="number" name="phone" placeholder="Phone No" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="px-4 pt-2 border border-slate-300 rounded-lg" name="textArea" id="" placeholder="Your Message" cols="" rows="5"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-block btn-accent" type="submit" value="Order Confirm" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;