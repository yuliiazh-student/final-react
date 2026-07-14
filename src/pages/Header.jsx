import Logo from '../assets/images/Logo.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <a href="#">Recipes</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Customer Support</a>
                        </li>
                    </ul>
                </nav>
                <div className="buttons">
                    {/* <div className="btn">
                <button>Log In</button>
              </div> */}
                    <div className="main-btn">
                        <button>Start For Free</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
