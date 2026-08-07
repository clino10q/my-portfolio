import image from "../assets/image.jpg";

export default function Hero() {
  return (
    <div className="flex justify-between w-[90%] items-center mt-15 max-md:flex-col max-md:gap-[20px]">
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
            View CV
          </button>
          <button className="h-[46px] w-[140px] border border-blue-500 rounded-md px-2 font-semibold cursor-pointer transition">
            Contact Me
          </button>
        </div>
      </div>
      <div
        className="h-[350px] w-[350px] rounded-xl bg-cover bg-center bg-no-repeat mr-10 max-md:items-center max-md:size-[350px] max-sm:size-[300px] max-md:mr-0"
        style={{ backgroundImage: `url(${image}) ` }}
      ></div>
    </div>
  );
}
