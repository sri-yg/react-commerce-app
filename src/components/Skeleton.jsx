export const Skeleton = ({ variant = "card", count = 1, title, message, onRetry }) => {

  if (variant === "error") {
    return (
      <div className="skeleton-error">
        <div className="skeleton-error-icon">⚠</div>
        <h4>{title || "Something went wrong"}</h4>
        <p>{message || "We couldn't load the data. Please try again."}</p>
        {onRetry && (
          <button className="btn btn-primary" onClick={onRetry}>
            Try again
          </button>
        )}
      </div>
    )
  }

  if (variant === "detail") {
    return (
      <div className="skeleton-detail">
        <div className="skeleton-detail-back animate-shimmer" />
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-6">
            <div className="skeleton-detail-image animate-shimmer" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="skeleton-detail-badge animate-shimmer" />
            <div className="skeleton-detail-title animate-shimmer" />
            <div className="skeleton-detail-rating animate-shimmer" />
            <div className="skeleton-detail-desc animate-shimmer" />
            <div className="skeleton-detail-price animate-shimmer" />
            <div className="skeleton-detail-btn animate-shimmer" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row g-4">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="skeleton-card animate-shimmer">
            <div className="skeleton-card-img" />
            <div className="skeleton-card-body">
              <div className="skeleton-card-badge" />
              <div className="skeleton-card-title" />
              <div className="skeleton-card-desc" />
              <div className="skeleton-card-price" />
              <div className="skeleton-card-btn" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
