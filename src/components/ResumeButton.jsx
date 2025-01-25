import React from "react";
import { Download } from "lucide-react"; // React download icon from lucide-react

const ResumeButton = () => {
  return (
    <a
      href="/Resume.pdf" // Path to your resume file
      download="Wimukthi_Gunarathna.pdf"
      className="relative inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl group overflow-hidden transition-transform duration-200 hover:scale-95 max-w-fit"
    >
      {/* Icon */}
      <div className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 left-2 sm:left-3 group-hover:left-1/2 group-hover:-translate-x-1/2">
        <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white transform transition-transform group-hover:scale-110" />
      </div>

      {/* Text */}
      <span className="ml-8 text-sm sm:text-base md:text-base transition-transform duration-300 group-hover:translate-x-[200%]">
        Download Resume
      </span>
    </a>
  );
};

export default ResumeButton;
