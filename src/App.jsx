import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { ProductDetails } from "./pages/ProductDetails";
import { MainLayout } from "./layouts/MainLayout";
import { useState } from "react";

export const App = () => {
  const [cartItems, setCartItems] = useState([])
    const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home addToCart={ addToCart } />} />
        <Route path="/cart" element={<Cart cartItems={ cartItems }/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:productId" element={<ProductDetails addToCart={ addToCart } />} />
      </Route>
    </Routes>
  )
}