import React from "react";
import Navbar from "../Component/Navbar";
function Projects() {
  const projects = [
    {
      title: "Attendance App",
      desc: "Employee check-in/out with image capture",
    },
    {
      title: "Dashboard UI",
      desc: "Analytics dashboard with charts and tables",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/10 border border-white/20 hover:scale-105 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
