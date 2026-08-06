import { langset, frameworks, apis, tools } from "../../api/skills";

export default function Skills() {
  return (
    <div className="mt-30 flex flex-col w-[90%] gap-10">
      <h2 className="text-5xl font-bold">Skills</h2>
      <div className="skills">
        <h1>Languages</h1>
        <div className="flex gap-4">
          {langset.map((lang) => {
            return (
              <div
                className="bg-stone-500 px-4 py-2 rounded-sm transition-transform duration-300 ease-in-out hover:scale-110 cursor-default"
                key={lang.id}
              >
                {lang.language}
              </div>
            );
          })}
        </div>
      </div>
      <div className="skills">
        <h1>Frameworks/Libraries</h1>
        <div className="flex gap-4">
          {frameworks.map((frames) => {
            return (
              <div
                className="bg-stone-500 px-4 py-2 rounded-sm transition-transform duration-300 ease-in-out hover:scale-110 cursor-default"
                key={frames.id}
              >
                {frames.frame}
              </div>
            );
          })}
        </div>
      </div>
      <div className="skills">
        <h1>APIs & Data</h1>
        <div className="flex gap-4">
          {apis.map((api) => {
            return (
              <div
                className="bg-stone-500 px-4 py-2 flex rounded-sm transition-transform duration-300 ease-in-out hover:scale-110 cursor-default"
                key={api.id}
              >
                {api.app}
              </div>
            );
          })}
        </div>
      </div>
      <div className="skills">
        <h1>Tooling/Deployment</h1>
        <div className="flex gap-4">
          {tools.map((tool) => {
            return (
              <div
                className="bg-stone-500 px-4 py-2 flex rounded-sm transition-transform duration-300 ease-in-out hover:scale-110 cursor-default"
                key={tool.id}
              >
                {tool.tooling}
              </div>
            );
          })}
        </div>
      </div>
      <div className="skills">
        <h1>Currently Learning</h1>
        <div className="flex gap-4">
          <div className="bg-stone-500 px-4 py-2 rounded-sm transition-transform duration-300 ease-in-out hover:scale-110 cursor-default">
            Backend Development
          </div>
        </div>
      </div>
    </div>
  );
}
