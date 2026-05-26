import { Link } from "react-router-dom"

export const Cart = ({ cartItems }) => {
    const totalItem = cartItems.length

    if (totalItem === 0) {
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
            <header className="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <h1 className="h5 mb-0">Shopping Cart</h1>
                    <div className="small" style={{color: 'var(--muted)'}}>{totalItem} item(s)</div>
                </div>
                <div>
                    <Link to="/" className="btn btn-outline-secondary btn-sm rounded-pill">Continue shopping</Link>
                </div>
            </header>

            <section className="row g-4">
                <div className="col-12 col-lg-8">
                    <div className="row g-3">
                        {cartItems.map((product, i) => (
                            <div key={product.id} className={`col-12 cart-item-enter stagger-${(i % 6) + 1}`}>
                                <article className="card product-card h-100 border-0 cart-item-card">
                                    <div className="row g-0">
                                        <div className="col-auto" style={{width: 160}}>
                                            <div className="card-img-top overflow-hidden position-relative" style={{height: 120}}>
                                                <img src={product.image} alt={product.title} className="w-100 h-100 object-cover product-img" />
                                                <span className="badge position-absolute top-2 start-2 category-badge">{product.category}</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card-body d-flex flex-column" style={{padding: '0.75rem 1rem'}}>
                                                <h3 className="h6 card-title mb-1 text-truncate" title={product.title}>{product.title}</h3>
                                                <p className="mb-2 small" style={{color: 'var(--muted)'}}>{product.description}</p>
                                                <div className="mt-auto d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <div className="h6 mb-0 fw-bold" style={{color: 'var(--text)'}}>${product.price}</div>
                                                        <div className="small" style={{color: 'var(--muted)'}}>Inclusive of taxes</div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <Link to={ `/product/` + product.id } className="btn btn-outline-secondary btn-sm rounded-pill">View Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="col-12 col-lg-4 animate-fade-in">
                    <div className="card p-4" style={{borderRadius: 'var(--radius)', background: 'var(--surface)', border: '1px solid var(--tan)', boxShadow: 'var(--card-shadow)'}}>
                        <h3 className="h6 mb-3">Order summary</h3>
                        <div className="d-flex justify-content-between mb-2">
                            <span style={{color: 'var(--muted)'}}>Items ({totalItem})</span>
                            <span className="fw-semibold" style={{color: 'var(--text)'}}>
                                ${cartItems.reduce((s, p) => s + Number(p.price || 0), 0).toFixed(2)}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <span style={{color: 'var(--muted)'}}>Shipping</span>
                            <span style={{color: 'var(--muted)'}}>Calculated at checkout</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold" style={{color: 'var(--burgundy)'}}>Total</span>
                            <span className="h5 mb-0 pd-price">
                                ${cartItems.reduce((s, p) => s + Number(p.price || 0), 0).toFixed(2)}
                            </span>
                        </div>
                        <button className="btn btn-checkout w-100 py-3">Proceed to checkout</button>
                    </div>
                </aside>
            </section>
        </main>
    )
}
