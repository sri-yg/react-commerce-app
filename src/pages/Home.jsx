import { ProductCard } from "../components/ProductCard";
import { Skeleton } from "../components/Skeleton";
import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts"
import { fetchCategories } from "../services/productService"

const LIMIT = 12

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories().then(setCategories).catch(() => {})
  }, [])

  const categoryPath = category ? `/category/${category}` : ''
  const skip = (page - 1) * LIMIT
  const { products, total, loading, error } = useProducts(
    `https://dummyjson.com/products${categoryPath}?limit=${LIMIT}&skip=${skip}`
  )

  const handleCategoryChange = (slug) => {
    setCategory(slug)
    setPage(1)
    setSearchQuery('')
  }

  const totalPages = Math.ceil(total / LIMIT)

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setPage(1)
  }

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    const pages = [1]
    const start = Math.max(2, page - 1)
    const end = Math.min(totalPages - 1, page + 1)
    if (start > 2) pages.push('...')
    for (let i = start; i <= end; i++) pages.push(i)
    if (end < totalPages - 1) pages.push('...')
    pages.push(totalPages)
    return pages
  }

  if (error) {
    return (
      <main className="container py-5">
        <Skeleton variant="error" title="Failed to load products" message={error} />
      </main>
    )
  }

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
              onChange={handleSearch}
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="category-filters">
          <button
            className={`category-btn${category === '' ? ' active' : ''}`}
            onClick={() => handleCategoryChange('')}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className={`category-btn${category === cat.slug ? ' active' : ''}`}
              onClick={() => handleCategoryChange(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <header className="section-header">
          <div>
            <h2>Featured Products</h2>
            <p>Hand-picked items — premium quality</p>
          </div>
          <div className="d-none d-md-block">
            <span className="text-muted small">
              Page {page} of {totalPages || 1}
            </span>
          </div>
        </header>

        <section>
          {loading ? (
            <Skeleton variant="card" count={LIMIT} />
          ) : (
            <div className="row g-4">
              {filtered.map((product, i) => (
                <div key={product.id} className={`col-12 col-sm-6 col-md-4 col-lg-3 stagger-${(i % 6) + 1}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </section>

        {totalPages > 1 && (
          <nav className="pagination-nav" aria-label="Product pagination">
            <button
              className="pagination-btn"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ← Prev
            </button>
            <div className="pagination-pages">
              {getPageNumbers().map((p, i) =>
                p === '...' ? (
                  <span key={`e${i}`} className="pagination-ellipsis">…</span>
                ) : (
                  <button
                    key={p}
                    className={`pagination-btn pagination-page${p === page ? ' active' : ''}`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                )
              )}
            </div>
            <button
              className="pagination-btn"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next →
            </button>
          </nav>
        )}
      </main>
    </>
  )
}
