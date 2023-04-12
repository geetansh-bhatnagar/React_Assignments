import { Link } from "react-router-dom";
import React from "react";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">    <img src="./nikelogo.jpg" alt="" style={{ height: '45px' }} /> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                <ul className="navbar-nav" style={{ gap: '40px' }}>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Shop
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ fontSize: '22px' }}>

                        <Link className="dropdown-item" to="/Products">Products</Link>
                            <Link className="dropdown-item" to="/Cart">Cart</Link>
                            {/*<Link className="dropdown-item" to="/Checkout">Checkout</Link>*/}

                        </div>
                    </li>
                </ul>
            </div>
            <div className="cart">
                <Link to="/Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                     className="bi bi-cart" viewBox="0 0 16 16"
                     style={{ cursor: 'pointer', transition: 'transform 0.2s ease-in-out' , color: 'red' }}
                     onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
                     onMouseOut={e => e.currentTarget.style.transform = 'none'}>

                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;