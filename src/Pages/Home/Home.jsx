import Slider from './Slider/Slider';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
// import { useContext } from 'react';
// import { Context } from '../../Provider/Provider';

const Home = () => {
    // const result = useContext(Context)
    // console.log(result)
    return (
        <div className=''>
            <Slider></Slider>
            <div className='space-y-32 mt-32'>
                <AboutUs></AboutUs>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;