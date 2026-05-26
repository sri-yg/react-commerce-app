import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { ProductDetails } from "./pages/ProductDetails";
import { MainLayout } from "./layouts/MainLayout";
import { useState, useRef } from "react";

export const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null); 

  const showToast = (message) => {
    setToast(message);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  };
    const addToCart = (product) => {
    setCartItems([...cartItems, product])
    showToast('Item added to cart!')
  }
  const removeFromCart = (productId) => {
    setCartItems(
      cartItems.filter((product) => product.id !== productId)
    )
    showToast('Removed from cart!')
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout toast={ toast } />} >
        <Route index element={<Home addToCart={ addToCart } removeFromCart={ removeFromCart } cartItems={ cartItems } />} />
        <Route path="/cart" element={<Cart cartItems={ cartItems } removeFromCart={ removeFromCart }/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} removeFromCart={removeFromCart} cartItems={ cartItems }  />} />
      </Route>
    </Routes>
  )
}
