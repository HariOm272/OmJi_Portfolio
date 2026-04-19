import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Profile", path: "/profile" },
    { name: "Tech Stacks", path: "/techstacks" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4">
      <div className="flex gap-6 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 
    ${
      isActive
        ? "bg-purple-600 text-white shadow-md"
        : "text-gray-200 hover:bg-white/20 hover:text-white hover:shadow-lg"
    }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
