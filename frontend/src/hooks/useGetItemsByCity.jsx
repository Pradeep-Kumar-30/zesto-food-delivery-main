import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../apiConfig'
import { useDispatch, useSelector } from 'react-redux'
import { setItemsInMyCity } from '../redux/userSlice'

function useGetItemsByCity() {
    const dispatch = useDispatch()
    const { currentCity, userData } = useSelector(state => state.user)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Use "all" as fallback if city not detected yet
                const city = currentCity || "all"
                const result = await axios.get(`${serverUrl}/api/item/get-by-city/${city}`, { withCredentials: true })
                dispatch(setItemsInMyCity(result.data))
            } catch (error) {
                console.log(error)
            }
        }
        if (userData) fetchItems()
    }, [currentCity, userData])
}

export default useGetItemsByCity
