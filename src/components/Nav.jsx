import { useState } from "react";

export default function Nav() {
  const [shrink, setShrink] = useState(false);

  return (
    <nav className="flex justify-between items-center py-[25px] px-[10px] w-[92%]">
      <div className="text-[1.5rem] font-bold text-white">
        Uniform<span className="text-blue-600">.</span>
      </div>

      <div className="flex flex-row md:flex-row-reverse md:gap-[20px]">
        <div className="flex justify-between gap-[4px] relative">
          <button
            className="flex flex-col justify-center gap-[5px] bg-none cursor-pointer p-[8px] w-[50px] h-[35px] md:hidden"
            onClick={() => setShrink(!shrink)}
          >
            <span
              className={`block w-[24px] h-[2px] bg-white rounded-sm ease-[0.3s] ${
                shrink ? "transform rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`block w-[24px] h-[2px] bg-white rounded-sm ease-[0.3s] ease-[0.3s] ${
                shrink ? "opacity-0" : "opacity-100"
              }
              }`}
            ></span>
            <span
              className={`block w-[24px] h-[2px] bg-white rounded-sm ease-[0.3s] ease-[0.3s] ${
                shrink ? "transform -rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </button>
        </div>
        <div
          className={`flex gap-[30px] items-center relative max-md:absolute max-md:gap-[15px] max-md:flex-col max-md:w-[220px] max-md:p-[12px] max-md:top-[60px] max-md:right-[0px] max-md:rounded-xl  max-md:transition-opacity max-md:transition-transform max-md:duration-300 max-md:ease-in-out max-md:z-[999] ${
            shrink
              ? "max-md:opacity-100 max-md:visible max-md:translate-y-0 shadow-lg "
              : "max-md:opacity-[0] max-md:invisible max-md:-translate-y-2.5"
          }
        `}
        >
          <a className="font-medium text-white cursor-pointer transition hover:text-blue-500">
            Home
          </a>
          <a className="font-medium text-white cursor-pointer transition hover:text-blue-500">
            About
          </a>
          <a className="font-medium text-white cursor-pointer transition hover:text-blue-500">
            Skills
          </a>
          <a className="font-medium text-white cursor-pointer transition hover:text-blue-500">
            Projects
          </a>
          <a className="font-medium text-white cursor-pointer transition hover:bg-blue-600 bg-blue-500 px-3 py-2 rounded-sm">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
