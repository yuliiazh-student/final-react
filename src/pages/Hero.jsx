import Balcony from '../assets/images/Balcony.webp';
import Card from '../assets/images/Card.webp';
import Dish from '../assets/images/dish.webp';
import Shop from '../assets/images/shop.webp';
import Shop2 from '../assets/images/shop2.webp';

export default function Hero() {
    return (
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
    );
}
