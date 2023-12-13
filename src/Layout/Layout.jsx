import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='lg:mx-32 mx-2'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='mt-32'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;