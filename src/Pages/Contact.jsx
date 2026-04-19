import React from "react";
import Navbar from "../Component/Navbar";
function Contact() {
  return (
    <>
      <Navbar> </Navbar>
      <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>

        <p className="text-gray-300 mb-6">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="flex flex-col gap-4">
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
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-md bg-white/10 border border-white/20 text-white outline-none"
          ></textarea>

          <button className="bg-purple-600 py-2 rounded-md text-white hover:bg-purple-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
