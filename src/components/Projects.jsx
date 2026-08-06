import saas from "../assets/saas.png";
import hotel from "../assets/hotel.png";
import ecom from "../assets/ecom.png";
import rya from "../assets/rya.png";
import fintrack from "../assets/fintrack.png";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      image: rya,
      id: 1,
      title: "Oil & Gas Company",
      description:
        "An oil & gas company website showcasing energy solutions, and industry expertise with a clean, responsive design.",
      liveLink: "https://ryagas.netlify.app/",
      repo: "https://github.com/clino10q/rya-gas",
      stack: ["ReactJs", "JavaScript", "TailwindCSS"],
    },
    {
      image: ecom,
      id: 2,
      title: "E-commerce Website",
      description:
        "A sleek e-commerce website designed for seamless product browsing, secure shopping, and an intuitive user experience.",
      liveLink: "https://uniform-mart.netlify.app/",
      repo: "https://github.com/clino10q/my--ecommerce--app",
      stack: ["ReactJs", "JavaScript", "TailwindCSS"],
    },
    {
      image: fintrack,
      id: 3,
      title: "Finance Tracker",
      description:
        "A responsive finance management application featuring expense tracking, and analytics with a clean, intuitive user interface.",
      liveLink: "https://financetrackin.netlify.app/",
      repo: "https://github.com/clino10q/fintrack-react",
      stack: ["ReactJs", "JavaScript", "TailwindCSS"],
    },

    {
      image: saas,
      id: 4,
      title: "AI Website",
      description: "An AI partner for your daily activities",
      liveLink: "https://lezhin-ai.netlify.app/",
      repo: "https://github.com/clino10q/Lezhin-AI",
      stack: ["HTML", "CSS", "JavaScript"],
    },

    {
      image: hotel,
      id: 5,
      title: "Hotel Website",
      description: "An hotel website created as my first serious project",
      liveLink: "https://www.google.com/",
      repo: "https://github.com/clino10q/uniform-hotel",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div className="mt-30 w-[92%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className=" shadow-md shadow-blue-500 rounded-[50px] flex flex-col gap-1"
          >
            <div
              className="h-[200px]  bg-cover bg-center bg-no-repeat rounded-[10px]"
              style={{ backgroundImage: `url(${project.image}) ` }}
            ></div>
            <div className="flex p-5 flex-col gap-2">
              <h2 className="font-semibold text-lg">{project.title}</h2>
              <p className="text-stone-400">{project.description}</p>
              <div className="text-stone-400 flex gap-2">
                {project.stack.map((tech) => {
                  return (
                    <div className="rounded-full border py-1 px-3 border-blue-700 text-white text-[12px] bg-blue-700">
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div>
                <button className="p-2 rounded-full border">
                  {" "}
                  <a href={project.liveLink}>Live Demo</a>{" "}
                </button>{" "}
                <button className="p-2 rounded-full border">
                  <a href={project.repo}>Source Code</a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
