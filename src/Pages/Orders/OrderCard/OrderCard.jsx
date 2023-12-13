import { MdAutoDelete } from "react-icons/md";

const OrderCard = ({ data, handleDelete }) => {

    const { _id, img, title, date, price, email } = data;
    return (
        <div className=" font-bold flex md:flex-row flex-col bg-base-200 p-4 items-center justify-between gap-5">
            <img className="w-32 h-32" src={img} alt="" />
            <h3 className="text-xl">{title}</h3>
            <h4>{'$' + price}</h4>
            <p>{date}</p>
            <button onClick={() => handleDelete(_id)} className="text-red-500 text-3xl"><MdAutoDelete></MdAutoDelete></button>
        </div>
    );
};

export default OrderCard;