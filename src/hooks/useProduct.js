import { useEffect, useState } from "react"
import { fetchProduct } from "../services/productService"

export const useProduct = (id) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await fetchProduct(id)
                setProduct(data)
            } 
            catch (err) {
                setError(err.message)
            } 
            finally {
                setLoading(false)
            }
        }

        loadProduct()
    }, [id])

    return {
        product,
        loading,
        error
    }
}
