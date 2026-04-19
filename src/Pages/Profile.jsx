import React from "react";
import Navbar from "../Component/Navbar";
function Profile() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I'm Hari Om, a frontend developer focused on building responsive and
          user-friendly applications. I enjoy working with React, Tailwind, and
          modern UI/UX practices. I'm currently preparing for competitive exams
          while improving my development skills.
        </p>
      </div>
    </>
  );
}

export default Profile;
