import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { serverUrl } from '../apiConfig';
import { setSearchItems, setUserData } from '../redux/userSlice';
import { FaPlus } from "react-icons/fa6";
import { TbReceipt2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '../brand';
function Nav() {
    const { userData, currentCity ,cartItems} = useSelector(state => state.user)
        const { myShopData} = useSelector(state => state.owner)
    const [showInfo, setShowInfo] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [query,setQuery]=useState("")
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleLogOut = async () => {
        try {
            await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true })
            dispatch(setUserData(null))
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearchItems=async () => {
      try {
        const result=await axios.get(`${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`,{withCredentials:true})
    dispatch(setSearchItems(result.data))
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
        if(query){
handleSearchItems()
        }else{
              dispatch(setSearchItems(null))
        }

    },[query])
    return (
        <div className='w-full h-[80px] flex items-center justify-between md:justify-center gap-[30px] px-[20px] fixed top-0 z-[9999] bg-gradient-to-r from-white via-violet-50/80 to-white shadow-lg border-b border-violet-100 overflow-visible'>

            {showSearch && userData.role == "user" && <div className='w-[90%] h-[70px] bg-white shadow-xl rounded-2xl items-center gap-[20px] flex fixed top-[80px] left-[5%] md:hidden border border-violet-100'>
                <div className='flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-violet-200'>
                    <FaLocationDot size={25} className="text-violet-600" />
                    <div className='w-[80%] truncate text-gray-600'>{currentCity}</div>
                </div>
                <div className='w-[80%] flex items-center gap-[10px]'>
                    <IoIosSearch size={25} className='text-violet-600' />
                    <input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full' onChange={(e)=>setQuery(e.target.value)} value={query}/>
                </div>
            </div>}

            <h1 className='text-2xl md:text-3xl font-black gradient-text mb-2 tracking-tight'>{APP_NAME}</h1>
            {userData.role == "user" && <div className='md:w-[60%] lg:w-[40%] h-[70px] bg-white shadow-lg rounded-2xl items-center gap-[20px] hidden md:flex border border-violet-100'>
                <div className='flex items-center w-[30%] overflow-hidden gap-[10px] px-[10px] border-r-[2px] border-violet-200'>
                    <FaLocationDot size={25} className="text-violet-600" />
                    <div className='w-[80%] truncate text-gray-600'>{currentCity}</div>
                </div>
                <div className='w-[80%] flex items-center gap-[10px]'>
                    <IoIosSearch size={25} className='text-violet-600' />
                    <input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full' onChange={(e)=>setQuery(e.target.value)} value={query}/>
                </div>
            </div>}

            <div className='flex items-center gap-4'>
                {userData.role == "user" && (showSearch ? <RxCross2 size={25} className='text-violet-600 md:hidden' onClick={() => setShowSearch(false)} /> : <IoIosSearch size={25} className='text-violet-600 md:hidden' onClick={() => setShowSearch(true)} />)
                }
                {userData.role == "owner"? <>
                 {myShopData && <> <button className='hidden md:flex items-center gap-1 px-4 py-2 cursor-pointer rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:shadow-lg hover:scale-105' onClick={()=>navigate("/add-item")}>
                        <FaPlus size={20} />
                        <span>Add Food Item</span>
                    </button>
                      <button className='md:hidden flex items-center p-2 cursor-pointer rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' onClick={()=>navigate("/add-item")}>
                        <FaPlus size={20} />
                    </button></>}
                   
                    <div className='hidden md:flex items-center gap-2 cursor-pointer relative px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 font-semibold hover:shadow-lg' onClick={()=>navigate("/my-orders")}>
                      <TbReceipt2 size={20}/>
                      <span>My Orders</span>
                      
                    </div>
                     <div className='md:hidden flex items-center gap-2 cursor-pointer relative px-3 py-1 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 font-semibold' onClick={()=>navigate("/my-orders")}>
                      <TbReceipt2 size={20}/>
                      
                    </div>
                </>: (
                    <>
                 {userData.role=="user" &&    <div className='relative cursor-pointer' onClick={()=>navigate("/cart")}>
                    <FiShoppingCart size={25} className='text-violet-600' />
                    <span className='absolute right-[-9px] top-[-12px] text-violet-600 font-bold'>{cartItems.length}</span>
                </div>}   
           


                <button className='hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 text-sm font-semibold hover:shadow-lg' onClick={()=>navigate("/my-orders")}>
                    My Orders
                </button>
                    </>
                )}



                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white text-[18px] shadow-lg font-bold cursor-pointer hover:shadow-xl hover:scale-110' onClick={() => setShowInfo(prev => !prev)}>
                    {(userData?.fullName?.slice(0, 1) ?? '?')}
                </div>
                {showInfo && <div className={`fixed top-[80px] right-[10px] 
                    ${userData.role=="deliveryBoy"?"md:right-[20%] lg:right-[40%]":"md:right-[10%] lg:right-[25%]"} w-[180px] bg-white shadow-2xl rounded-2xl p-[20px] flex flex-col gap-[10px] z-[9999] border border-violet-100`}>
                    <div className='text-[17px] font-bold text-gray-800'>{userData.fullName}</div>
                    {userData.role=="user" && <div className='md:hidden text-violet-700 font-semibold cursor-pointer hover:text-violet-800' onClick={()=>navigate("/my-orders")}>My Orders</div>}
                    
                    <div className='text-violet-700 font-semibold cursor-pointer hover:text-violet-800' onClick={handleLogOut}>Log Out</div>
                </div>}

            </div>
        </div>
    )
}


export default Nav
