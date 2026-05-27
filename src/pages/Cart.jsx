import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    if (totalItems === 0) {
        return (
            <main className="container py-5">
                <div className="text-center py-5">
                    <div className="h1 mb-3 not-found-float">🛒</div>
                    <h1 className="h4 mb-3">Your cart is empty</h1>
                    <p className="text-muted mb-4">Browse products and add items to your cart to get started.</p>
                    <Link to="/" className="btn btn-primary btn-lg rounded-pill">Continue shopping</Link>
                </div>
            </main>
        )
    }

    return (
        <main className="container py-5">
            <header className="section-header">
                <div>
                    <h2>Shopping Cart</h2>
                    <p>{totalItems} item{totalItems > 1 ? 's' : ''}</p>
                </div>
                <div>
                    <Link to="/" className="btn btn-outline-primary btn-sm">Continue shopping</Link>
                </div>
            </header>

            <section className="row g-4">
                <div className="col-12">
                    <div className="row g-3">
                        {cartItems.map((item, i) => (
                            <div key={item.product.id} className={`col-12 cart-item-enter stagger-${(i % 6) + 1}`}>
                                <article className="card product-card h-100 border-0 cart-item-card">
                                    <div className="row g-0">
                                        <div className="cart-img-wrap">
                                            <div className="card-img-top overflow-hidden position-relative" style={{height: 120}}>
                                                <img src={item.product.thumbnail || item.product.images?.[0]} alt={item.product.title} className="w-100 h-100 object-cover product-img" />
                                                <span className="badge position-absolute top-2 start-2 category-badge">{item.product.category}</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card-body d-flex flex-column">
                                                <h3 className="h6 card-title mb-1" title={item.product.title}>{item.product.title}</h3>
                                                <p className="mb-2 small text-muted">{item.product.description}</p>
                                                <div className="mt-auto d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <button className="btn btn-outline-primary btn-sm" style={{width: 32, height: 32, padding: 0}} onClick={() => updateQuantity(item.product.id, -1)} disabled={item.quantity <= 1}>–</button>
                                                            <span className="px-2 fw-semibold" style={{minWidth: 24, textAlign: 'center'}}>{item.quantity}</span>
                                                            <button className="btn btn-outline-primary btn-sm" style={{width: 32, height: 32, padding: 0}} onClick={() => updateQuantity(item.product.id, 1)}>+</button>
                                                        </div>
                                                        <div className="cart-item-price">${(item.product.price * item.quantity).toFixed(2)}</div>
                                                    </div>
                                                    <button type="button" className="btn btn-ghost-danger btn-sm" onClick={() => removeFromCart(item.product.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="row mt-4">
                <div className="col-12 col-md-6 ms-auto">
                    <div className="card border-0" style={{background: 'var(--bg-card)'}}>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Subtotal ({totalItems} items)</span>
                                <span className="fw-semibold">${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Shipping</span>
                                <span className="text-success">Free</span>
                            </div>
                            <hr style={{borderColor: 'var(--border-subtle)'}} />
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold" style={{color: 'var(--text-primary)'}}>Total</span>
                                <span className="fw-bold" style={{color: 'var(--text-primary)', fontSize: 'var(--text-xl)'}}>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="btn btn-checkout w-100 rounded-pill">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
