import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="top-main">
                <Link to="/" className="Brand-font brand">
                    Myth
                </Link>
                <Link to="/About" className="top-font">
                    About us
                </Link>
            </header>
        </div>
    );
}

export default Header;
