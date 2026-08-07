import image from "../assets/image.jpg";

export default function Hero() {
  return (
    <section
      className="flex justify-between w-[90%] items-center mt-15 max-md:flex-col max-md:gap-[20px]"
      id="hero"
    >
      <div className="w-[50%] flex flex-col gap-4 max-md:w-[100%] max-md:w-full max-md:items-center max-md:gap-1">
        <div className="font-bold">
          <p className="max-md:text-[50px] text-white text-[70px]">Ilelaboye</p>
          <p className="max-md:text-[50px] text-white text-[70px] -mt-5">
            Ayomide
          </p>
        </div>

        <h4 className="text-blue-600 text-[20px] font-bold">
          Frontend Developer
        </h4>
        <p className="text-neutral-400 font-semibold max-md:text-center">
          Computer Science student at Redeemer's University passionate about
          building modern, responsive and user-friendly web experiences.
        </p>
        <div className="flex gap-4 w-[250px]">
          <button className="h-[46px] w-[120px] bg-blue-500 rounded-md px-2 font-semibold cursor-pointer transition hover:bg-blue-500">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View My CV
            </a>
          </button>
          <button className="h-[46px] w-[140px] border border-blue-500 rounded-md px-2 font-semibold cursor-pointer transition">
            <a
              href="https://wa.me/2349113519042?text=Hello%20Ayomide%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%20I%27d%20love%20to%20discuss%20a%20potential%20project%20with%20you."
              target="_blank"
              rel="noreferrer noopener"
            >
              Contact Me
            </a>
          </button>
        </div>
      </div>
      <div
        className="h-[350px] w-[350px] rounded-xl bg-cover bg-center bg-no-repeat mr-10 max-md:items-center max-md:size-[350px] max-sm:size-[300px] max-md:mr-0"
        style={{ backgroundImage: `url(${image}) ` }}
      ></div>
    </section>
  );
}
