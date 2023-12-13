import { useContext } from "react";
import siteLogo from "../../assets/logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { Context } from "../Provider/Provider";

const Navbar = () => {

    const { user, logout } = useContext(Context);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start  justify-between lg:justify-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/services"}>Services</NavLink></li>
                        {user?.email ? <>
                            <li><NavLink to={"/orders"}>Orders</NavLink></li>

                            <li><Link to={'/'} onClick={handleLogout}>Logout</Link></li>
                        </> : <li><NavLink to={'/login'}>Login</NavLink></li>}
                        <div className='flex relative'>
                            <input className='border-2 px-2 py-1 border-black rounded-s-full w-full' placeholder='Search' type="search" name="search" id="" />
                            <button className="bg-black rounded-e-full px-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>

                    </ul>

                </div>
                <Link to={'/'}><a className="text-xl"><img className='w-8 h-8 lg:w-full lg:h-full' src={siteLogo} alt="" /></a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/services"}>Services</NavLink></li>
                    {user?.email ? <>
                        <li><NavLink to={"/orders"}>Orders</NavLink></li>

                        <li><Link to={'/'} onClick={handleLogout}>Logout</Link></li>
                    </> : <li><NavLink to={'/login'}>Login</NavLink></li>}
                </ul>

            </div>

            <div className="navbar-end md:gap-1">

                <button className="btn btn-ghost btn-circle max-[768px]:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

                <a className="btn btn-outline btn-accent">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;