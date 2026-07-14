import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <NavLink to="./">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <NavLink to="/recipes">Recipes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support">Customer Support</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="buttons">
                    {/* <div className="btn">
                <button>Log In</button>
              </div> */}
                    <div className="main-btn">
                        <NavLink to="/register">
                            <button type="button">Start For Free</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
