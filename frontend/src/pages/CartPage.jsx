import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItemCard from '../components/CartItemCard';
function CartPage() {
    const navigate = useNavigate()
    const { cartItems, totalAmount } = useSelector(state => state.user)
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-cyan-50 flex justify-center p-6 pt-24'>
            <div className='w-full max-w-[800px]'>
                <div className='flex items-center gap-[20px] mb-6 '>
                    <div className=' z-[10] cursor-pointer hover:scale-110 transition' onClick={() => navigate("/")}>
                        <IoIosArrowRoundBack size={35} className='text-violet-700' />
                    </div>
                    <h1 className='text-3xl font-bold gradient-text text-start'>Your Cart</h1>
                </div>
                {cartItems?.length == 0 ? (
                    <p className='text-gray-500 text-lg text-center py-10'>Your Cart is Empty</p>
                ) : (<>
                    <div className='space-y-5'>
                        {cartItems?.map((item, index) => (
                            <CartItemCard data={item} key={index} />
                        ))}
                    </div>
                    <div className='mt-6 bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center border-2 border-violet-200 hover:shadow-xl transition'>

                        <h1 className='text-lg font-bold text-gray-800'>Total Amount</h1>
                        <span className='text-2xl font-black bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent'>₹{totalAmount}</span>
                    </div>
                    <div className='mt-6 flex justify-end' > 
                        <button className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg hover:scale-105 transition cursor-pointer' onClick={()=>navigate("/checkout")}>Proceed to CheckOut</button>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default CartPage
