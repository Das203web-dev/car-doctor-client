import aboutImg1 from '../../../../assets/images/about_us/person.jpg';
import aboutImg2 from '../../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center gap-5'>
            <div className='relative w-full'>
                <img className='w-5/6 h-full' src={aboutImg1} alt="" />
                <div className=''>
                    <img className='w-1/2 absolute border-8 border-white -bottom-10 lg:right-10 right-0' src={aboutImg2} alt="" />
                </div>
            </div>
            <div className='w-full space-y-5'>
                <h1 className='text-xl text-cyan-700 font-bold'>About Us</h1>
                <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-accent">Get More Info</button>

            </div>
        </div>
    );
};

export default AboutUs;