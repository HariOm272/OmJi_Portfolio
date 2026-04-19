import React from "react";

function SectionCard({ children, index }) {
  return (
    <div
      className="sticky top-24 h-screen flex items-center justify-center"
      style={{ zIndex: 10 + index }}
    >
      <div className="w-[90%] max-w-5xl h-[70vh] rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 transition-all duration-500">
        {children}
      </div>
    </div>
  );
}

export default SectionCard;
