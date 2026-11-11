import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../apiConfig'
import { useSelector } from 'react-redux'

function useUpdateLocation() {
    const {userData}=useSelector(state=>state.user)
 
    useEffect(()=>{
const updateLocation=async (lat,lon) => {
    const result=await axios.post(`${serverUrl}/api/user/update-location`,{lat,lon},{withCredentials:true})
    console.log(result.data)
}

const watchId = navigator.geolocation.watchPosition((pos)=>{
    updateLocation(pos.coords.latitude,pos.coords.longitude)
})
return () => navigator.geolocation.clearWatch(watchId)
    },[userData])
}

export default useUpdateLocation
