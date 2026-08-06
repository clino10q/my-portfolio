import saas from "../assets/saas.png";
import hotel from "../assets/hotel.png";
import ecom from "../assets/ecom.png";
import rya from "../assets/rya.png";

export default function Projects() {
  const projects = [
    {
      image: rya,
      id: 1,
      description: "An oil and gas company's website that is multipaged",
      liveLink: "",
      repo: "",
      stack: ["ReactJs", "JavaScript", "TailwindCSS"],
    },
    {
      image: ecom,
      id: 2,
      description:
        "An ecommerce with searching, add-to-cart,tracking orders features",
      liveLink: "",
      repo: "",
      stack: ["ReactJs", "JavaScript", "TailwindCSS"],
    },

    {
      image: saas,
      id: 3,
      description: "An AI partner for your daily activities",
      liveLink: "",
      repo: "",
      stack: ["HTML", "CSS", "JavaScript"],
    },

    {
      image: hotel,
      id: 4,
      title: "Hotel Website",
      description: "An hotel website created as my first serious project",
      liveLink: "",
      repo: "",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <div>{project.image}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              <button>Live Demo</button> <button>Source Code</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
