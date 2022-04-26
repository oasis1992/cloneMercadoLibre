import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const useSearchProducts = (value) => {
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProducts = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items?q=${value}&limit=4`)
            setData(response.data)
        } catch (e) {
            setError(e.response.data)
        }
        setLoading(false)
    }, [value])

    useEffect(() => {
        if (!value) {
            return
        }
        fetchProducts()
    }, [value, fetchProducts])

    return {
        data,
        loading,
        error,
    }
}

export default useSearchProducts
