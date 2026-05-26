import { Link } from "react-router-dom"
import logo from "../assets/Logo-Test.png"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top py-3">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <img src={logo} alt="logo" width="48" height="48" className="d-inline-block align-top" />
                    <span className="fw-bold d-none d-md-inline">React Commerce</span>
                </Link>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-3" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link px-3 nav-link-cart">
                                <span className="cart-icon-bounce">🛒</span> Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
