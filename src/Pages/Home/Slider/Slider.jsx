import banner1 from '../../../../assets/images/banner/1.jpg'
import banner2 from '../../../../assets/images/banner/2.jpg'
import banner3 from '../../../../assets/images/banner/3.jpg'
import banner4 from '../../../../assets/images/banner/4.jpg'
import banner5 from '../../../../assets/images/banner/5.jpg'
import banner6 from '../../../../assets/images/banner/6.jpg'
const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white ml-5 md:w-1/2 w-full space-y-7'>
                        <h1 className='lg:text-6xl text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-accent'>Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide4" className="btn btn-circle btn-accent">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-accent">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white ml-5 md:w-1/2 w-full space-y-7'>
                        <h1 className='lg:text-6xl text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-accent'>Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide1" className="btn btn-circle btn-accent">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-accent">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white ml-5 md:w-1/2 w-full space-y-7'>
                        <h1 className='lg:text-6xl text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-accent'>Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide2" className="btn btn-circle btn-accent">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-accent">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white ml-5 md:w-1/2 w-full space-y-7'>
                        <h1 className='lg:text-6xl text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-accent'>Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide3" className="btn btn-circle btn-accent">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-accent">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white ml-5 md:w-1/2 w-full space-y-7'>
                        <h1 className='lg:text-6xl text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-accent'>Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide4" className="btn btn-circle btn-accent">❮</a>
                    <a href="#slide6" className="btn btn-circle btn-accent">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />
                <div className="absolute flex items-center left-0 top-0 bottom-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white ml-5 md:w-1/2 w-full space-y-7'>
                        <h1 className='lg:text-6xl text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-accent'>Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Project</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide5" className="btn btn-circle btn-accent">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-accent">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;