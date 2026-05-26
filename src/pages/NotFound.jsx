import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <main className="container py-5">
            <div className="text-center py-5">
                <div className="not-found-display">404</div>
                <h1 className="h3 mb-2">Page not found</h1>
                <p className="text-muted mb-4">We couldn't find the page you're looking for.</p>
                <Link to="/" className="btn btn-primary rounded-pill btn-lg px-5">Take me home</Link>
            </div>
        </main>
    )
}
