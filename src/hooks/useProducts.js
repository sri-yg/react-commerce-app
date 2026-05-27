import { useEffect, useState } from "react"
import { fetchProducts as fetchProductsService } from "../services/productService"

export const useProducts = (fetchUrl) => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await fetchProductsService(fetchUrl)
                setProducts(data.products)
                setTotal(data.total)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }

        loadProducts()
    }, [fetchUrl])

    return {
        products,
        total,
        loading,
        error
    }
}