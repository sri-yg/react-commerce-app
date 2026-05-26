import { ProductCard } from "../components/ProductCard";
import { products } from "../data/product";

export const Home = ({ addToCart }) => {
  return (
    <>
      <section className="container-fluid hero-ken-burns position-relative" style={{background: 'var(--burgundy)', padding: '5rem 0 4rem', marginTop: -1}}>
        <div className="container position-relative" style={{zIndex: 1}}>
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <p className="mb-2 hero-subtitle" style={{color: 'var(--tan)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem'}}>Welcome to the collection</p>
              <h1 className="display-4 fw-bold mb-3 hero-title" style={{color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em'}}>Curated for the<br />discerning eye</h1>
              <p className="mb-4 hero-subtitle" style={{color: 'var(--tan)', fontSize: '1.1rem', maxWidth: '26rem'}}>Hand-picked essentials, elevated everyday. Thoughtful design meets uncompromising quality.</p>
              <div className="hero-cta d-flex gap-3 flex-wrap">
                <button className="btn rounded-pill px-4 py-2 fw-semibold" style={{background: 'var(--tan)', color: 'var(--burgundy)', border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.06)'}}>Explore the edit</button>
                <button className="btn rounded-pill px-4 py-2 fw-semibold" style={{background: 'transparent', color: 'var(--cream)', border: '1px solid rgba(255,255,255,0.2)'}}>New arrivals →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid border-bottom" style={{background: 'var(--surface)', borderColor: 'var(--tan) !important'}}>
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
        <header className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h1 className="h3 mb-1">Featured Products</h1>
            <p className="text-muted mb-0">Hand-picked items — premium quality</p>
          </div>
          <div className="d-none d-md-block">
            <button className="btn btn-outline-secondary rounded-pill">View all</button>
          </div>
        </header>

        <section>
          <div className="row g-4">
            {products && products.map((product, i) => (
              <div key={product.id} className={`col-12 col-sm-6 col-md-4 col-lg-3 stagger-${(i % 6) + 1}`}>
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
