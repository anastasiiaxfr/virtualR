import { CheckCircle2 } from "lucide-react";
import img1 from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section class="section section_wrokflow" id="workflow"> 
      <div className="container">
        <h2 className="text-center">
          {" "}
          Accelerate your <span>coding workflow</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10 gap-10">
          <div className="">
            <img src={img1} alt="ALT" />
          </div>
          <div className="">
          <ul className="list">
            {checklistItems.map((item, ind) => (
                <li className="list-item"  key={ind}>
                  <div className="list-icon">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h5 className="list-title">{item.title}</h5>
                    <p className="list-desc">{item.description}</p>
                  </div>
                </li>
             
            ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
