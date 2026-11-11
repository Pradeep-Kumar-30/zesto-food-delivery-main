import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../apiConfig'
import { useDispatch, useSelector } from 'react-redux'
import { setShopsInMyCity } from '../redux/userSlice'

function useGetShopByCity() {
    const dispatch = useDispatch()
    const { currentCity, userData } = useSelector(state => state.user)

    useEffect(() => {
        const fetchShops = async () => {
            try {
                // Use "all" as fallback if city not detected yet
                const city = currentCity || "all"
                const result = await axios.get(`${serverUrl}/api/shop/get-by-city/${city}`, { withCredentials: true })
                dispatch(setShopsInMyCity(result.data))
            } catch (error) {
                console.log(error)
            }
        }
        if (userData) fetchShops()
    }, [currentCity, userData])
}

export default useGetShopByCity
