export default function About() {
  return (
    <div className="mt-30 flex flex-col w-[90%] gap-10">
      <h2 className="text-5xl font-bold">About Me</h2>
      <div className="w-[80%] text-stone-400 flex flex-col gap-2 text-[15px] font-semibold">
        <p>
          I'm Ilelaboye Ayomide, a frontend developer focused on turning ideas
          into interfaces that actually feel good to use. I work primarily in
          HTML, CSS, JavaScript, and React, and I learn by building — every
          project adds a new piece, whether that's routing, state management, or
          a more deliberate design system.
        </p>
        <p>
          Recent work includes a React + Tailwind shopping site (Fake Store API)
          with category filtering and dark mode. Earlier projects span a quiz
          app built on the OpenTDB API, a finance tracker using derived state
          and localStorage persistence, a hotel booking flow with regex-based
          form validation, and a login system with inline error handling — plus
          foundational work with CSS Grid, flexbox, scroll-triggered animations,
          and responsive layouts.
        </p>
        <p>
          I pay attention to the details that separate a functional UI from a
          polished one: consistent color systems, inline feedback instead of
          jarring alerts, and layouts that hold up across screen sizes. I'd
          rather refine something iteratively than start over from scratch. When
          I'm not coding, I'm usually playing chess or breaking down a game.
        </p>
      </div>
    </div>
  );
}
