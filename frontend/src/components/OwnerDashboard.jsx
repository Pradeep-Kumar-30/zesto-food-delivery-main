import React from 'react'
import Nav from './Nav.jsx'
import { useSelector } from 'react-redux'
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import OwnerItemCard from './OwnerItemCard.jsx';
function OwnerDashboard() {
  const { myShopData } = useSelector(state => state.owner)
  const navigate = useNavigate()

  
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-cyan-50 flex flex-col items-center'>
      <Nav />
      {!myShopData &&
        <div className='flex justify-center items-center p-4 sm:p-6 mt-8'>
          <div className='w-full max-w-md bg-white shadow-xl rounded-3xl p-6 border-2 border-violet-200 hover:shadow-2xl hover:scale-105 transition-all duration-300'>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-gradient-to-br from-violet-100 to-fuchsia-100 p-4 rounded-2xl mb-4'>
                <FaUtensils className='text-violet-700 w-16 h-16 sm:w-20 sm:h-20' />
              </div>
              <h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent mb-2'>Add Your Restaurant</h2>
              <p className='text-gray-600 mb-6 text-sm sm:text-base'>Join our food delivery platform and reach thousands of hungry customers every day.
              </p>
              <button className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200' onClick={() => navigate("/create-edit-shop")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      }

      {myShopData &&
        <div className='w-full flex flex-col items-center gap-6 px-4 sm:px-6 pb-10'>
          <h1 className='text-2xl sm:text-3xl gradient-text flex items-center gap-3 mt-8 text-center font-bold'><FaUtensils className='text-violet-700 w-14 h-14' />Welcome to {myShopData.name}</h1>

          <div className='bg-white shadow-xl rounded-3xl overflow-hidden border-2 border-violet-200 hover:shadow-2xl transition-all duration-300 w-full max-w-3xl relative'>
            <div className='absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer' onClick={()=>navigate("/create-edit-shop")}>
<FaPen size={20}/>
            </div>
             <img src={myShopData.image} alt={myShopData.name} className='w-full h-48 sm:h-64 object-cover'/>
             <div className='p-4 sm:p-6'>
              <h1 className='text-xl sm:text-2xl font-bold gradient-text mb-2'>{myShopData.name}</h1>
              <p className='text-gray-500 font-semibold'>{myShopData.city},{myShopData.state}</p>
              <p className='text-gray-600 mb-4'>{myShopData.address}</p>
            </div>
          </div>

          {myShopData.items.length==0 && 
            <div className='flex justify-center items-center p-4 sm:p-6'>
          <div className='w-full max-w-md bg-white shadow-xl rounded-3xl p-6 border-2 border-violet-200 hover:shadow-2xl hover:scale-105 transition-all duration-300'>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-gradient-to-br from-violet-100 to-fuchsia-100 p-4 rounded-2xl mb-4'>
                <FaUtensils className='text-violet-700 w-16 h-16 sm:w-20 sm:h-20' />
              </div>
              <h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent mb-2'>Add Your Food Item</h2>
              <p className='text-gray-600 mb-6 text-sm sm:text-base'>Share your delicious creations with our customers by adding them to the menu.
              </p>
              <button className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200' onClick={() => navigate("/add-item")}>
              Add Food
              </button>
            </div>
          </div>
        </div>
            }

            {myShopData.items.length>0 && <div className='flex flex-col items-center gap-4 w-full max-w-3xl '>
              {myShopData.items.map((item,index)=>(
                <OwnerItemCard data={item} key={index}/>
              ))}
              </div>}
            
        </div>}



    </div>
  )
}

export default OwnerDashboard
