import { createBrowserRouter, } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import About from "../Pages/About/About";
import Login from "../components/Login";
import Registration from "../components/Registration";
import ServiceDetails from "../components/ServiceDetails";
import CheckOut from "../components/CheckOut";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/serviceDetails/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: "/orders",
                element: <Orders></Orders>
                // loader: ({ params }) => fetch(`http://localhost:5000/orders?email=${params.email}`)
            }

        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/registration",
        element: <Registration></Registration>
    }
])


export default router;