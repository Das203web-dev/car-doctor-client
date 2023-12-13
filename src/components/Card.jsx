const Card = ({ facilities }) => {
    return (
        <div className='space-y-3 bg-[#F3F3F3] p-2'>
            <h1 className='text-lg font-bold'>{facilities.name}</h1>
            <p className='capitalize'>{facilities.details}</p>
        </div>
    );
};

export default Card;