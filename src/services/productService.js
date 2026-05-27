const BASE_URL = "https://dummyjson.com"

export const fetchProducts = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  const data = await response.json()
  return { products: data.products, total: data.total }
}

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/categories`)
  if (!response.ok) {
    throw new Error("Failed to fetch categories")
  }
  return response.json()
}

export const fetchProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch product")
  }
  const data = await response.json()
  return data
}
