import HowItWorks from './HowItWorks';
import Footer from './Footer';
import myVideo from './assets/video/bazil.mp4';
import Logo from './assets/images/Logo.svg';
import Balcony from './assets/images/Balcony.webp';
import Card from './assets/images/Card.webp';
import Dish from './assets/images/dish.webp';
import Shop from './assets/images/shop.webp';
import Shop2 from './assets/images/shop2.webp';

function App() {

  return (
    <>
      <div className="page-wrapper">
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
        <section className="hero">
          <div className="container">
            <hgroup>
              <h1>Elevate Your Mealtime with AI-Powered Personalization</h1>
              <p>Effortless Planning, Healthier Eating</p>
            </hgroup>
            <div className="photos">
              <div className="first-card">
                <h2>95%</h2>
                <p>Improved Eating Habits</p>
                <img src={Shop2} alt="Green bag" />
              </div>
              <div className="high-card">
                <img src={Dish} alt="Healthy meal" />
              </div>
              <div className="hero-center">
                <div className="hero-buttons">
                  <div className="btn-demo">
                    <button>Try Our Demo</button>
                  </div>
                  <div className="btn-free">
                    <button>Start For Free</button>
                  </div>
                </div>
                <div className="card-users">
                  <img src={Card} alt="Quantity" />
                </div>
              </div>
              <div className="third-card">
                <img src={Shop} alt="White bag" />
                <h2>25%</h2>
                <p>Saved on Groceries</p>
              </div>
              <div className="high-card-2">
                <img src={Balcony} alt="Plants" />
              </div>
            </div>
          </div>
        </section>
        <section className="demo">
          <div className="container">
            <hgroup>
              <h2>Demo</h2>
              <p>See how it works: your personalized meal planning journey</p>
            </hgroup>
            <div className="general-wrapper">
              <div className="video-outer-wrap">
                <div className="video-inner-wrap">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-content"
                  >
                    <source src={myVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
              <p className="paragraf">
                Every meal is a chance to nourish your body, inspire your mind, and
                feed your soul.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="app-container">
            <HowItWorks />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>

  )
}

export default App
