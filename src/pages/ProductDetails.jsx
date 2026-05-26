import { useParams, Link } from "react-router-dom"
import { products } from "../data/product"

export const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === Number(productId))

  if (!product) {
    return (
      <main className="container py-5">
        <div className="alert alert-warning">Product not found</div>
        <Link to="/" className="btn btn-outline-primary">Back to home</Link>
      </main>
    )
  }

  return (
    <main className="container py-5">
      <nav className="mb-4 animate-fade-in">
        <Link to="/" className="btn btn-outline-secondary btn-sm rounded-pill back-link" style={{fontSize: '0.85rem'}}>
          <span>←</span>
          <span>Back to products</span>
        </Link>
      </nav>

      <div className="row g-5 align-items-start">
        <div className="col-12 col-lg-6">
          <div className="ratio ratio-4x3 product-hero rounded-4 overflow-hidden">
            <img src={product.image} alt={product.title} className="w-100 h-100 object-cover product-hero-img" />
          </div>
          <div className="d-flex gap-2 mt-3">
            <div className="small product-detail-ship">Secure checkout</div>
            <div className="small product-detail-ship">Free returns</div>
            <div className="small product-detail-ship">2 year warranty</div>
          </div>
        </div>

        <div className="col-12 col-lg-6 animate-fade-in">
          <div className="mb-2">
            <span className="pd-category">{product.category}</span>
          </div>

          <h1 className="h2 fw-bold mb-2" style={{lineHeight: 1.15}}>{product.title}</h1>

          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="pd-rating d-flex align-items-center gap-2">
              <div className="text-warning">★★★★★</div>
              <div className="small" style={{color: 'var(--muted)'}}>4.8 • 1.2k reviews</div>
            </div>
            <div className="small" style={{color: 'var(--muted)'}}>|</div>
            <div className="small" style={{color: 'var(--muted)'}}>Ships in 1-2 days</div>
          </div>

          <p className="mb-4" style={{color: 'var(--muted)', lineHeight: 1.7}}>{product.description}</p>

          <div className="d-flex align-items-end justify-content-between gap-3 mb-4">
            <div>
              <div className="h2 mb-0 pd-price">${product.price}</div>
              <div className="small" style={{color: 'var(--muted)'}}>Inclusive of taxes</div>
            </div>

            <div className="text-end">
              <div className="small fw-semibold animate-pulse-glow" style={{color: 'var(--burgundy)', padding: '0.25rem 0.75rem', borderRadius: 999, background: 'rgba(129,11,56,0.04)'}}>In stock</div>
              <div className="small" style={{color: 'var(--muted)'}}>Only a few left</div>
            </div>
          </div>

          <div className="d-flex gap-3 mb-3 flex-column flex-sm-row">
            <button className="btn btn-primary btn-lg rounded-pill pd-cta py-3" onClick={() => addToCart(product)}>Add to cart</button>
          </div>

          <div className="d-flex gap-3 align-items-center mt-3 flex-wrap">
            <div className="small" style={{color: 'var(--muted)'}}>Ships from USA</div>
            <div className="small" style={{color: 'var(--muted)'}}>•</div>
            <div className="small" style={{color: 'var(--muted)'}}>Free shipping over $50</div>
            <div className="small" style={{color: 'var(--muted)'}}>•</div>
            <div className="small" style={{color: 'var(--muted)'}}>30-day returns</div>
          </div>

          <hr className="my-4" />

          <div className="d-flex gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <div className="fw-semibold" style={{color: 'var(--text)'}}>Payment:</div>
              <div className="small" style={{color: 'var(--muted)'}}>Visa / Mastercard / PayPal</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="fw-semibold" style={{color: 'var(--text)'}}>Warranty:</div>
              <div className="small" style={{color: 'var(--muted)'}}>2 years included</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
