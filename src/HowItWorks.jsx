import { useState } from 'react';
import img1 from './assets/images/girl.webp';
import img2 from './assets/images/table.webp';
import img3 from './assets/images/salad.webp';

const steps = [
    {
        id: "01",
        title: "Personalize Your Profile",
        description: "Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.",
        image: img1
    },
    {
        id: "02",
        title: "Choose Your Recipes",
        description: "Select from hundreds of chef-curated recipes that match your weekly targets.",
        image: img2
    },
    {
        id: "03",
        title: "Enjoy Your Meal",
        description: "Get fresh ingredients or pre-made healthy meals delivered straight to your door.",
        image: img3
    }
];

export default function HowItWorks() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((p) => (p === steps.length - 1 ? 0 : p + 1));
    const prevSlide = () => setCurrent((p) => (p === 0 ? steps.length - 1 : p - 1));

    return (
        <section className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>How it works</h2>
                    <p>Step into the world of hassle-free meal planning with our easy 3-step process</p>
                </div>

                <div className="section-content">
                    <div className="text-block">
                        <span className="step-number">{steps[current].id}</span>
                        <h3 className="step-title">{steps[current].title}</h3>
                        <p className="step-desc">{steps[current].description}</p>

                        <div className="controls">
                            <button onClick={prevSlide} className="btn-prev"><i class="icon-Label-left"></i></button>
                            <button onClick={nextSlide} className="btn-next"><i class="icon-Label-right"></i></button>
                            <div className="pagination">
                                0{current + 1}/0{steps.length}
                            </div>
                        </div>
                    </div>

                    <div className="cards-stack">
                        {steps.map((step, index) => {
                            let offset = index - current;
                            if (offset < 0) offset += steps.length;

                            const zIndex = steps.length - offset;
                            const translateX = offset * -50;
                            const rotate = offset === 0 ? 6 : offset === 1 ? -3 : -12;

                            return (
                                <div
                                    key={step.id}
                                    style={{
                                        zIndex: zIndex,
                                        transform: `translateX(${translateX}px) rotate(${rotate}deg)`,
                                    }}
                                    className="stack-card"
                                >
                                    <img src={step.image} alt={step.title} />
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
}
