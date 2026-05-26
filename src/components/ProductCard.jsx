import { Link } from "react-router-dom"
export const ProductCard = ({ product, addToCart, cartItems, removeFromCart }) => {
    return (
      <article className="card product-card h-100 border-0 animate-fade-in-up">
        <div className="card-img-top overflow-hidden position-relative" style={{height: 220}}>
          <img src={product.thumbnail || product.images?.[0]} alt={product.title} className="w-100 h-100 object-cover product-img" />
          <span className="badge position-absolute top-2 start-2 category-badge">{product.category}</span>
        </div>

        <div className="card-body d-flex flex-column">
          <h3 className="h6 card-title mb-1"><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
          <p className="mb-2 small flex-grow-0">{product.description}</p>

          <div className="mt-auto">
            <div className="mb-3">
              <div className="product-price">${product.price}</div>
            </div>

            <div className="cta-group">
              { cartItems && cartItems.some((item) => item.id === product.id) ? 
                <button className="btn btn-outline-primary btn-sm" onClick={() => removeFromCart(product.id)}>Remove</button>
              : 
                <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>Add to cart</button>}
            </div>
          </div>
        </div>
      </article>
    )
}
