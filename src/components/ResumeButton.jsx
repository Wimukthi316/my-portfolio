import React from "react";
import { Download } from "lucide-react"; // React download icon from lucide-react

const ResumeButton = () => {
  return (
    <a
      href="/Resume.pdf" // Path to your resume file
      download="Wimukthi_Gunarathna.pdf"
      className="relative flex items-center px-11 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl group overflow-hidden transition-transform duration-200 hover:scale-95"
    >
      {/* Icon */}
      <div className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 left-3 group-hover:left-1/2 group-hover:-translate-x-1/2">
        <Download className="w-6 h-6 text-white transform transition-transform group-hover:scale-110" />
      </div>

      {/* Text */}
      <span className="ml-3 transition-transform duration-300 group-hover:translate-x-[200%]">
        Download My Resume
      </span>
    </a>
  );
};

export default ResumeButton;
