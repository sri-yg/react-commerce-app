import { useParams, Link } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import { useCart } from "../context/CartContext"
import { Skeleton } from "../components/Skeleton"
import { useState } from "react"


export const ProductDetails = () => {
  const { cartItems, addToCart, removeFromCart } = useCart()
  const { productId } = useParams()
  const { product, loading, error } = useProduct(productId)
  const [imgIndex, setImgIndex] = useState(0)

  if (error) {
    return (
      <main className="container py-5">
        <Skeleton variant="error" title="Failed to load product" message={error} />
      </main>
    )
  }

  if (loading) {
    return (
      <main className="container py-5">
        <Skeleton variant="detail" />
      </main>
    )
  }

  if (!product) {
    return (
      <main className="container py-5">
        <div className="alert alert-warning">Product not found</div>
        <Link to="/" className="btn btn-outline-primary">Back to home</Link>
      </main>
    )
  }

  const images = product.images || []
  const prevImg = () => setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const nextImg = () => setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1))

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
          <div className="product-hero rounded-4 overflow-hidden">
            <div className="image-slider">
              <div className="image-slider-main">
                <img src={images[imgIndex] || product.thumbnail} alt={product.title} className="image-slider-img" />
                {images.length > 1 && (
                  <>
                    <button className="slider-btn slider-btn-prev" onClick={prevImg} aria-label="Previous image">‹</button>
                    <button className="slider-btn slider-btn-next" onClick={nextImg} aria-label="Next image">›</button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="image-slider-thumbs">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      className={`image-slider-thumb ${i === imgIndex ? 'active' : ''}`}
                      onClick={() => setImgIndex(i)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <div className="small product-detail-ship">🔒 Secure checkout</div>
            <div className="small product-detail-ship">↩ Free returns</div>
            <div className="small product-detail-ship">🛡 2 year warranty</div>
          </div>
        </div>

        <div className="col-12 col-lg-6 animate-fade-in">
          <div className="mb-2">
            <span className="pd-category">{product.category}</span>
          </div>

          <h1 className="h2 fw-bold mb-2" style={{lineHeight: 1.15}}>{product.title}</h1>

          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="pd-rating d-flex align-items-center gap-2">
              <div className="text-warning">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</div>
              <div className="small text-muted">{product.rating.toFixed(1)}</div>
            </div>
            <div className="small text-muted">|</div>
            <div className="small text-muted">Ships in 1-2 days</div>
          </div>

          <p className="mb-4 text-muted" style={{lineHeight: 1.7}}>{product.description}</p>

          <div className="d-flex align-items-end justify-content-between gap-3 mb-4">
            <div>
              <div className="h2 mb-0 pd-price">${product.price}</div>
              <div className="small text-muted">Inclusive of taxes</div>
            </div>

            <div className="text-end">
              <div className="in-stock-badge">In stock<span className="stock-qty">— only a few left</span></div>
            </div>
          </div>

          <div className="d-flex gap-3 mb-3 flex-column flex-sm-row">
            { cartItems.some((item) => item.product.id === product.id) ? 
              <button className="btn btn-primary btn-sm px-4 py-2" onClick={() => removeFromCart(product.id)}>Remove from cart</button>
            :
              <button className="btn btn-primary btn-sm px-4 py-2" onClick={() => addToCart(product)}>Add to cart</button>}

          </div>

          <div className="d-flex gap-3 align-items-center mt-3 flex-wrap">
            <div className="small text-muted">Ships from USA</div>
            <div className="small text-muted">•</div>
            <div className="small text-muted">Free shipping over $50</div>
            <div className="small text-muted">•</div>
            <div className="small text-muted">30-day returns</div>
          </div>

          <hr className="my-4" />

          <div className="d-flex gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <div className="fw-semibold text-white">Payment:</div>
              <div className="small text-muted">Visa / Mastercard / PayPal</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="fw-semibold text-white">Warranty:</div>
              <div className="small text-muted">2 years included</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
