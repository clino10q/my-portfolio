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
      description:
        "A modern AI-powered SaaS platform that streamlines workflows through intelligent automation and real-time insights.",
      liveLink: "https://lezhin-ai.netlify.app/",
      repo: "https://github.com/clino10q/Lezhin-AI",
      stack: ["HTML", "CSS", "JavaScript"],
    },

    {
      image: hotel,
      id: 5,
      title: "Hotel Website",
      description:
        "A modern hotel website designed to showcase rooms, amenities, and online booking with a seamless user experience.",
      liveLink: "https://www.google.com/",
      repo: "https://github.com/clino10q/uniform-hotel",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <section className="mt-30 w-[90%] flex flex-col gap-10" id="projects">
      <h1 className="font-bold text-5xl">Projects</h1>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="group shadow-md flex flex-col overflow-hidden"
            >
              <div
                className="h-[200px]  bg-cover bg-center bg-no-repeat rounded-t-[10px] rounded-e-none rounded-s-none transition-transform ease-in-out delay-[0.1s] group-hover:scale-105 "
                style={{ backgroundImage: `url(${project.image}) ` }}
              ></div>
              <div className="flex p-5 flex-col gap-3 bg-[#151A24] rounded-b-[10px]">
                <h2 className="font-semibold text-lg transition ease-in delay-[0.2s] group-hover:text-blue-600">
                  {project.title}
                </h2>
                <p className="text-stone-400 -mt-2 transition ease-in delay-[0.2s] group-hover:text-white">
                  {project.description}
                </p>

                <div className="w-full flex gap-2">
                  <button className="px-3 py-[5px] rounded-[11px] bg-blue-500 font-medium hover:bg-white hover:text-blue-500 transition ease-in">
                    {" "}
                    <a href={project.liveLink}>Live Demo</a>{" "}
                  </button>{" "}
                  <button className="px-3 py-[5px] rounded-[11px] border border-blue-500 font-medium hover:bg-white hover:border-indigo-400 hover:text-indigo-400 transition ease-in">
                    <a href={project.repo}>Source Code</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
