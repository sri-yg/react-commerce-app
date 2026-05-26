import { Link } from "react-router-dom"
export const ProductCard = ({ product, addToCart }) => {
  return (
    <article className="card product-card h-100 border-0 animate-fade-in-up">
      <div className="card-img-top overflow-hidden position-relative" style={{height: 220}}>
        <img src={product.image} alt={product.title} className="w-100 h-100 object-cover product-img" />
        <span className="badge position-absolute top-2 start-2 category-badge">{product.category}</span>
      </div>

      <div className="card-body d-flex flex-column">
        <h3 className="h6 card-title mb-1 text-truncate" title={product.title}>{product.title}</h3>
        <p className="mb-2 small flex-grow-0">{product.description}</p>

        <div className="mt-auto">
          <div className="price-wrap mb-3">
            <div className="h5 mb-0 fw-bold">${product.price}</div>
            <div className="small">Inclusive of taxes</div>
          </div>

          <div className="cta-group mt-auto d-flex gap-2">
            <button className="btn btn-primary btn-sm px-4 py-2" onClick={() => addToCart(product)}>Add to cart</button>
            <Link to={ `/product/` + product.id } className="btn btn-outline-secondary btn-sm px-4 py-2">View Details</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
