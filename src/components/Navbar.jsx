import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false); // Close menu on scroll
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full text-white z-50 font-serif py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold hover:text-[#8B5CF6]">
          Wimukthi Gunarathna
        </h1>

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
          <a href="#home" className="hover:text-[#8B5CF6]">
            Home
          </a>
          <a href="#about" className="hover:text-[#8B5CF6]">
            About
          </a>
          <a href="#projects" className="hover:text-[#8B5CF6]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#8B5CF6]">
            Contact
          </a>
        </div>
      </div>

      {/* Redesigned Mobile Menu Links */}
      <div
        ref={menuRef}
        className={`absolute top-16 right-4 w-64 rounded-lg bg-[#1A1A1A] shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="#home"
              className="flex items-center px-4 py-3 text-sm font-medium text-white hover:bg-[#262626] hover:text-[#8B5CF6] transition-all rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-3 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7m-9-2v12"
                />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center px-4 py-3 text-sm font-medium text-white hover:bg-[#262626] hover:text-[#8B5CF6] transition-all rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-3 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l3-3m-3 3l-3-3"
                />
              </svg>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex items-center px-4 py-3 text-sm font-medium text-white hover:bg-[#262626] hover:text-[#8B5CF6] transition-all rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-3 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h12M6 12h12m-7 6h7"
                />
              </svg>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center px-4 py-3 text-sm font-medium text-white hover:bg-[#262626] hover:text-[#8B5CF6] transition-all rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-3 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 00-8 0v2m8-6a4 4 0 00-8 0m-4-6a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
