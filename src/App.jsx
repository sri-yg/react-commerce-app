import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { ProductDetails } from "./pages/ProductDetails";
import { MainLayout } from "./layouts/MainLayout";
import { CartProvider } from "./context/CartContext";
import { useState, useRef } from "react";

export const App = () => {
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

  return (
    <CartProvider onCartAction={showToast}>
      <Routes>
        <Route path="/" element={<MainLayout toast={ toast } />} >
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}
