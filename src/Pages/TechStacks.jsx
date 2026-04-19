import React from "react";
import Navbar from "../Component/Navbar";
function TechStacks() {
  const techs = ["React", "JavaScript", "Tailwind", "HTML", "CSS", "Git"];

  return (
    <>
      <Navbar></Navbar>
      <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="px-5 py-2 bg-white/10 border border-white/20 rounded-md text-gray-200 hover:bg-purple-600 hover:text-white transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStacks;
