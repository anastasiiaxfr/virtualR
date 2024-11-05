import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section className="section sectio_testimonials" id="testimonials">
        <div className="container">
            <h2 className="text-center">  What People are saying </h2>

            <div className="testimonials">
                {testimonials.map((i, ind) => (
                    <article className="testimonial" key={ind}>
                        <p className="testimonial-text">{i.text}</p>
                        <div className="testimonial-info">
                            <img src={i.image} alt={i.text} />
                            <div>
                                <h6>{i.user}</h6>
                                <span className="testimonial-data">{i.company}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials