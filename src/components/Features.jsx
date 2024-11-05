import { features } from '../constants'

const Features = () => {
  return (
    <section className="section section_features" id="features">
        <div class="container">
            <div className="hgroup">
                <p className="suptitle">
                    feature
                </p>
                <h2> Easily Build <span>your code</span> 
                </h2>
            </div>

            <div className="features mt-14 lg:mt-20">
                {features.map((feature, ind) => (
                    <article key={ind} class="feature">
                        <div className="flex gap-4">
                            <div className="feature-icon">
                                { feature.icon }
                            </div>
                            <div>
                                <h5 class="feature-title">{feature.text}</h5>
                                <p className="feature-description">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features