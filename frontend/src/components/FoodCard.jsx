import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaDrumstickBite } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/userSlice';

function FoodCard({data}) {
const [quantity,setQuantity]=useState(0)
const dispatch=useDispatch()
const {cartItems}=useSelector(state=>state.user)
    const renderStars=(rating)=>{   //r=3
        const stars=[];
        for (let i = 1; i <= 5; i++) {
           stars.push(
            (i<=rating)?(
                <FaStar className='text-yellow-500 text-lg'/>
            ):(
                <FaRegStar className='text-yellow-500 text-lg'/>
            )
           )
            
        }
return stars
    }

const handleIncrease=()=>{
    const newQty=quantity+1
    setQuantity(newQty)
}
const handleDecrease=()=>{
    if(quantity>0){
const newQty=quantity-1
    setQuantity(newQty)
    }
    
}

  return (
    <div className='w-[250px] rounded-3xl border-2 border-violet-200 bg-white shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col hover:border-violet-400'>
      <div className='relative w-full h-[170px] flex justify-center items-center bg-gradient-to-br from-violet-100 to-fuchsia-100'>
        <div className='absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg border-2 border-violet-200'>{data.foodType=="veg"?<FaLeaf className='text-green-600 text-lg'/>:<FaDrumstickBite className='text-fuchsia-700 text-lg'/>}</div>

<img src={data.image} alt="" className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'/>
      </div>

      <div className="flex-1 flex flex-col p-4">
<h1 className='font-bold text-gray-900 text-base truncate'>{data.name}</h1>

<div className='flex items-center gap-1 mt-2'>
{renderStars(data.rating?.average || 0)}
<span className='text-xs text-gray-500 ml-1'>
    ({data.rating?.count || 0})
</span>
</div>
      </div>

<div className='flex items-center justify-between mt-auto p-3 border-t-2 border-violet-100'>
<span className='font-bold text-transparent bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-lg'>
    ₹{data.price}
</span>

<div className='flex items-center border-2 border-violet-300 rounded-full overflow-hidden shadow-md'>
<button className='px-2 py-1 hover:bg-violet-100 transition text-violet-700' onClick={handleDecrease}>
<FaMinus size={12}/>
</button>
<span className='px-2 font-semibold text-gray-700'>{quantity}</span>
<button className='px-2 py-1 hover:bg-violet-100 transition text-violet-700' onClick={handleIncrease}>
<FaPlus size={12}/>
</button>
<button className={`${cartItems.some(i=>i.id==data._id)?"bg-gray-700":"bg-gradient-to-r from-violet-600 to-fuchsia-600"} text-white px-3 py-2 transition-all hover:shadow-lg`}  onClick={()=>{
    quantity>0?dispatch(addToCart({
          id:data._id,
          name:data.name,
          price:data.price,
          image:data.image,
          shop: data.shop?._id || data.shop,
          quantity,
          foodType:data.foodType
})):null}}>
<FaShoppingCart size={16}/>
</button>
</div>
</div>


    </div>
  )
}

export default FoodCard
