const Banner = ({ img, title }) => {
    return (
        <div className="relative ">
            <img className="h-80 w-full" src={img} alt="" />
            <div className="absolute  flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                <h1 className="text-4xl ml-5 text-white font-bold ">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;