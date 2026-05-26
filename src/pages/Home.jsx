import { ProductCard } from "../components/ProductCard";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts"

export const Home = ({ addToCart, cartItems, removeFromCart }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchTerm = (e) => {
    setSearchQuery(e.target.value)
  }
  const { products } = useProducts('https://dummyjson.com/products')
  return (
    <>
      <section className="hero-section">
        <div className="container position-relative" style={{zIndex: 1}}>
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <p className="hero-label">Welcome to the collection</p>
              <h1 className="hero-title">Curated for the<br />discerning eye</h1>
              <p className="hero-subtitle">Hand-picked essentials, elevated everyday. Thoughtful design meets uncompromising quality.</p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-primary">Explore the edit</button>
                <button className="btn btn-outline-primary">New arrivals →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-row">
        <div className="container py-3">
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            <span className="feature-badge">Free shipping over $50</span>
            <span className="feature-badge">30-day returns</span>
            <span className="feature-badge">Secure checkout</span>
            <span className="feature-badge">2 year warranty</span>
          </div>
        </div>
      </section>

      <main className="container py-5">
        <div className="search-toolbar">
          <div className="search-bar">
            <span className="search-bar-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={searchTerm}
              aria-label="Search products"
            />
          </div>
        </div>

        <header className="section-header">
          <div>
            <h2>Featured Products</h2>
            <p>Hand-picked items — premium quality</p>
          </div>
          <div className="d-none d-md-block">
            <button className="btn btn-outline-primary btn-sm">View all</button>
          </div>
        </header>

        <section>
          <div className="row g-4">
            {products && products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((product, i) => (
              <div key={product.id} className={`col-12 col-sm-6 col-md-4 col-lg-3 stagger-${(i % 6) + 1}`}>
                <ProductCard product={product} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
