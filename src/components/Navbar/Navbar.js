import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import './navbar.scss'
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav__logo">
                <Logo color="black" />
            </div>
            <div 
                className="nav__menu-container"
                onClick={() => setMenuOpen(true)}
            >
                <div className="nav__menu-icon"></div>
            </div>
            <div 
                className={`nav__links ${ menuOpen && "open" }`}
            >
                <div className="nav__close-menu--align-right">
                    <div
                        className="nav__close-menu-container"
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="nav__close-menu-icon"></div>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link to="/webalar-assignment">Home</Link>
                    </li>
                    <li>
                        <Link to="/webalar-assignment">About</Link>
                    </li>
                    <li>
                        <Link to="/webalar-assignment/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/webalar-assignment">
                            <Button>Get in Touch</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}