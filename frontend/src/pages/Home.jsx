import React from 'react'
import { useSelector } from 'react-redux'
import UserDashboard from '../components/UserDashboard'
import OwnerDashboard from '../components/OwnerDashboard'
import DeliveryBoy from '../components/DeliveryBoy'

const VALID_ROLES = ['user', 'owner', 'deliveryBoy']

function Home() {
    const {userData}=useSelector(state=>state.user)
    const role = userData?.role
  return (
    <div className='w-[100vw] min-h-[100vh] pt-[100px] flex flex-col items-center bg-gradient-to-br from-slate-50 via-violet-50 to-cyan-50'>
      {role === 'user' && <UserDashboard/>}
      {role === 'owner' && <OwnerDashboard/>}
      {role === 'deliveryBoy' && <DeliveryBoy/>}
      {userData && !VALID_ROLES.includes(role) && (
        <div className='max-w-md rounded-2xl border border-violet-200 bg-white p-8 text-center shadow-lg'>
          <p className='text-lg font-semibold text-gray-800'>Account role is missing or invalid.</p>
          <p className='mt-2 text-sm text-gray-600'>Please sign out and sign in again, or contact support.</p>
        </div>
      )}
    </div>
  )
}

export default Home
