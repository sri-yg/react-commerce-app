import { Link } from "react-router-dom"

export const Cart = ({ cartItems,removeFromCart }) => {
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
            <header className="section-header">
                <div>
                    <h2>Shopping Cart</h2>
                    <p>{totalItem} item{totalItem > 1 ? 's' : ''}</p>
                </div>
                <div>
                    <Link to="/" className="btn btn-outline-primary btn-sm">Continue shopping</Link>
                </div>
            </header>

            <section className="row g-4">
                <div className="col-12">
                    <div className="row g-3">
                        {cartItems.map((product, i) => (
                            <div key={product.id} className={`col-12 cart-item-enter stagger-${(i % 6) + 1}`}>
                                <article className="card product-card h-100 border-0 cart-item-card">
                                    <div className="row g-0">
                                        <div className="cart-img-wrap">
                                            <div className="card-img-top overflow-hidden position-relative" style={{height: 120}}>
                                                <img src={product.thumbnail || product.images?.[0]} alt={product.title} className="w-100 h-100 object-cover product-img" />
                                                <span className="badge position-absolute top-2 start-2 category-badge">{product.category}</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card-body d-flex flex-column">
                                                <h3 className="h6 card-title mb-1" title={product.title}>{product.title}</h3>
                                                <p className="mb-2 small text-muted">{product.description}</p>
                                                <div className="mt-auto d-flex align-items-center justify-content-between">
                                                    <div className="cart-item-price">${product.price}</div>
                                                    <button type="button" className="btn btn-ghost-danger btn-sm" onClick={() => removeFromCart(product.id)}>Remove</button>
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
        </main>
    )
}
