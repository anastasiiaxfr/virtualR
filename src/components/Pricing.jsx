import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <section className="section section_pricing" id="pricing">
        <div className="container">
        <h2 className="text-center"> Prising </h2>

        <div className="plans">
            {pricingOptions.map((i, ind) => (
                <article className="plan" key={ind}>
                    <div>
                    <p className="plan-title">
                        {i.title} {i.title === "Pro" && <span>(Most Popular)</span>}
                    </p>
                    <p className="">
                        <span className="plan-price">{i.price}<span>/Month</span></span>
                    </p>
                    </div>
                    <ul className="plan-list">
                        {i.features.map((feat, ind) => (
                            <li key={ind}>
                                <CheckCircle2 />
                                {feat}
                            </li>
                        ))}
                    </ul>

                    <a href="#" className="btn-bd w-full">Subscribe</a>
                </article>
            ))}
        </div>

        </div>
    </section>
  )
}

export default Pricing