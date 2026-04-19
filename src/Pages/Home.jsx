import React from "react";
import Navbar from "../Component/Navbar";
import SectionCard from "../Component/SectionCard";
function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center min-h-[80vh] animate-fadeUp px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
          Hi, I'm <span className="text-purple-500">Hari Om</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-5 animate-fadeUp [animation-delay:0.2s]">
          A passionate full stack developer building modern, responsive and
          user-friendly web applications.
        </p>

        <div className="flex gap-4 animate-fadeUp [animation-delay:0.4s] mb-10">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            View Projects
          </button>

          <button className="px-6 py-2 border border-white/30 text-white rounded-md hover:bg-white/10 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* STACKED SECTIONS */}
      <div className="relative">
        {/* Profile */}
        <SectionCard index={1}>
          <h2 className="text-3xl text-white mb-4">Profile</h2>
          <p className="text-gray-300">
            I'm Hari Om, a full stack developer focused on building clean and
            scalable applications using React, Tailwind, and backend tools.
          </p>
        </SectionCard>

        {/* Tech Stack */}
        <SectionCard index={2}>
          <h2 className="text-3xl text-white mb-6">Tech Stacks</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Tailwind", "Node.js", "MongoDB"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-gray-200 hover:bg-purple-600 hover:text-white transition"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </SectionCard>

        {/* Projects */}
        <SectionCard index={3}>
          <h2 className="text-3xl text-white mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Attendance App",
                desc: "Employee check-in/out system with image capture",
              },
              {
                title: "Dashboard UI",
                desc: "Analytics dashboard with charts and tables",
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="p-4 bg-white/10 border border-white/20 rounded-lg hover:scale-105 transition"
              >
                <h3 className="text-white font-semibold">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.desc}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Contact */}
        <SectionCard index={4}>
          <h2 className="text-3xl text-white mb-4">Contact</h2>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white/10 border border-white/20 text-white outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white/10 border border-white/20 text-white outline-none"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="p-3 rounded-md bg-white/10 border border-white/20 text-white outline-none"
            />
            <button className="bg-purple-600 py-2 rounded-md text-white hover:bg-purple-700 transition">
              Send
            </button>
          </div>
        </SectionCard>

        {/* FOOTER */}
        <div className="h-[40vh] flex items-center justify-center text-gray-400">
          © 2026 Hari Om • All Rights Reserved
        </div>
      </div>
    </>
  );
}

export default Home;
