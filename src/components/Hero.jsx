import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function Hero() {
    return (
        <section className="section section_hero">
            <div className="container hero-container">
                <div className="hgroup text-center">
                    <h1>
                        VirtualR build tools <span>for developers</span>
                    </h1>
                    <p className="subttile">
                        Empower your creativity and bring your VR app ideas to life with our
                        intuitive development tools. Get started today and turn your
                        imagination into immersive reality!
                    </p>

                    <div className="btns my-10">
                        <a href="#" className="btn py-3 px-7">
                            start for free
                        </a>
                        <a href="#" className="btn-bd py-3 px-7">
                            Documentation
                        </a>
                    </div>

                    <div className="video-wrap">
                        <video src={video1} autoPlay loop muted></video>
                        <video src={video2} autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
