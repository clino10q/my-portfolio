export default function Contact() {
  return (
    <div className="mt-15 w-[90%] flex flex-col gap-10">
      <h2 className="font-bold text-5xl">Contact</h2>
      <div className="bg-[#151A24] p-[40px] rounded-[20px] text-stone-400 flex flex-col gap-2">
        <h3 className="font-semibold">
          Email:{" "}
          <a
            href="mailto:ilelaboyeayomide8@gmail.com?subject=Portfolio Inquiry&amp;body=Hello Ayomide, I would like to discuss a project with you."
            className="text-sm text-blue-600 hover:underline"
          >
            {" "}
            ilelaboyeayomide8@gmail.com
          </a>
        </h3>
        <h3 className="font-semibold text-stone-400">
          WhatsApp:{" "}
          <a
            href="https://wa.me/2349113519042?text=Hello%20Ayomide%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you.%20I%27d%20love%20to%20discuss%20a%20potential%20project%20with%20you."
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
          >
            +234 911 351 9042
          </a>
        </h3>
        <h3 className="font-semibold text-stone-400">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ilelaboye-ayomide-2bb7853a3/"
            className="text-sm text-blue-600 hover:underline"
          >
            Ilelaboye Ayomide
          </a>
        </h3>
      </div>
    </div>
  );
}
