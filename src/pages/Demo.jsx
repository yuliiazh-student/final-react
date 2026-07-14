import myVideo from '../assets/video/bazil.mp4';

export default function Demo() {
    return (
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
    );
}
