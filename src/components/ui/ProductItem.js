import {FiPlus} from "react-icons/fi"

export default function ProductItem({product}) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
        <button className="absolute top-3 right-0 w-8 h-8 flex items-center
        justify-center border border-gray-200 rounded-lg transition-colors text-purple-700
        shadow-md hover:border-purple-700"
        >
        <FiPlus size={16}/>
        </button>
        <img src={product.image} alt={product.title}/>
        <div className=" text-purple-700">{product.price}</div>
        <div className=" text-gray-900">{product.title}</div>
        <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
