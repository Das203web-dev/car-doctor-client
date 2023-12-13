import { useContext } from 'react';
import Navbar from './Navbar';
import { Context } from '../Provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const { login } = useContext(Context);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                if (result.user) {
                    e.target.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,

                        timer: 1500
                    });
                }
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/")

                }, 2000)
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `${error?.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn' type="submit" value="Login" />
                            </div>
                            <p>New here ! Please <Link className='text-blue-600 font-bold' to={'/registration'}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;