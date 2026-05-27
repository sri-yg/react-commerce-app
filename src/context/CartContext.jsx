import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext(null)

export const CartProvider = ({ children, onCartAction }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
    onCartAction?.('Item added to cart!')
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
    onCartAction?.('Removed from cart!')
  }

  const updateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.product.id !== productId) return [...acc, item]
        const next = item.quantity + delta
        if (next <= 0) return acc
        return [...acc, { ...item, quantity: next }]
      }, [])
    )
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
