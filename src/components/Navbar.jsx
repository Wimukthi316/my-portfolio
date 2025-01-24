import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full text-white z-50 font-serif py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Wimukthi Gunarathna</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-14 text-xl">
          <a href="#home" className="hover:text-[#f6af2a]">Home</a>
          <a href="#about" className="hover:text-[#f6af2a]">About</a>
          <a href="#projects" className="hover:text-[#f6af2a]">Projects</a>
          <a href="#contact" className="hover:text-[#f6af2a]">Contact</a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-black text-white px-4 pb-4 space-y-2">
          <a href="#home" className="block hover:text-[#f6af2a]">Home</a>
          <a href="#about" className="block hover:text-[#f6af2a]">About</a>
          <a href="#projects" className="block hover:text-[#f6af2a]">Projects</a>
          <a href="#skills" className="block hover:text-[#f6af2a]">Skills</a>
          <a href="#contact" className="block hover:text-[#f6af2a]">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
