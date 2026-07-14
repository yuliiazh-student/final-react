export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-brand-nav">
                        <div className="footer-logo">
                            <a href="#">
                                <svg width="74" height="50" viewBox="0 0 74 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#D9EF78" />
                                    <path d="M61.3636 0H73.4849V50H61.3636V0Z" fill="#D9EF78" />
                                </svg>
                            </a>
                        </div>
                        <nav className="footer-nav">
                            <div className="nav-column">
                                <a href="#recipes">Recipes</a>
                                <a href="#blog">Blog</a>
                            </div>
                            <div className="nav-column">
                                <a href="#support">Customer Support</a>
                                <a href="#profile">Your Profile</a>
                            </div>
                        </nav>

                    </div>

                    <div className="footer-info-social">
                        <p className="footer-text">
                            Join us on our journey to make meal planning simple and joyful.
                            Connect with us on social media, explore our FAQs for quick answers, or drop us a line anytime.
                        </p>
                        <div className="footer-socials">
                            <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <i className="icon-facebook"></i>
                            </a>
                            <a href="https://x.com" className="social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                                <i className="icon-X"></i>
                            </a>
                            <a href="https://tiktok.com" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                                <i className="icon-Tiktok"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>
                        &copy; 2064 AIChefMate. All rights reserved. |{" "}
                        <a href="#privacy">Privacy Policy</a> |{" "}
                        <a href="#terms">Terms of Use</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
