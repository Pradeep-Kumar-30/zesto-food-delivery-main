import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../apiConfig'
import { useDispatch } from 'react-redux'
import { setAuthLoading, setUserData } from '../redux/userSlice'

function useGetCurrentUser() {
    const dispatch=useDispatch()
  useEffect(()=>{
  const fetchUser=async () => {
    try {
           const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
            dispatch(setUserData(result.data))
  
    } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
    } finally {
        dispatch(setAuthLoading(false))
    }
}
fetchUser()
 
  },[])
}

export default useGetCurrentUser
