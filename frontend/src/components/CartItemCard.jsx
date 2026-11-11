import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { removeCartItem, updateQuantity } from '../redux/userSlice';
function CartItemCard({data}) {
    const dispatch=useDispatch()
    const handleIncrease=(id,currentQty)=>{
       dispatch(updateQuantity({id,quantity:currentQty+1}))
    }
      const handleDecrease=(id,currentQty)=>{
        if(currentQty>1){
  dispatch(updateQuantity({id,quantity:currentQty-1}))
        }
        
    }
  return (
    <div className='flex items-center justify-between bg-white p-3 rounded-2xl shadow-lg border border-violet-100 w-full max-w-2xl mx-auto' style={{minHeight:"86px"}}>
      <div className='flex items-center gap-3'>
        <img src={data.image} alt="" className='w-16 h-16 object-cover rounded-lg border border-violet-200'/>
        <div>
            <h1 className='font-semibold text-gray-800 text-sm'>{data.name}</h1>
            <p className='text-xs text-gray-500'>₹{data.price} x {data.quantity}</p>
            <p className="font-bold text-gray-900 text-base">₹{data.price*data.quantity}</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button className='p-2 cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200' onClick={()=>handleDecrease(data.id,data.quantity)}>
        <FaMinus size={12}/>
        </button>
        <span>{data.quantity}</span>
        <button className='p-2 cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200'  onClick={()=>handleIncrease(data.id,data.quantity)}>
        <FaPlus size={12}/>
        </button>
        <button className="p-2 bg-fuchsia-100 text-fuchsia-700 rounded-full hover:bg-fuchsia-200"
 onClick={()=>dispatch(removeCartItem(data.id))}>
<CiTrash size={18}/>
        </button>
      </div>
    </div>
  )
}

export default CartItemCard
