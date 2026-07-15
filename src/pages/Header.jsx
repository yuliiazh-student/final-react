import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div>
                    <NavLink to="./">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>

                <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <NavLink to="/recipes" onClick={() => setIsMenuOpen(false)}>Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" onClick={() => setIsMenuOpen(false)}>Customer Support</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="buttons">
                    <div className="main-btn">
                        <NavLink to="/register">
                            <button type="button">Start For Free</button>
                        </NavLink>
                    </div>
                </div>

                <button
                    type="button"
                    className="burger-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}