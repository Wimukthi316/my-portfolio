import React from "react";

const SendButton = () => {
  return (
    <button className="relative flex items-center px-11 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl group overflow-hidden transition-transform duration-200 hover:scale-95">
      {/* Icon */}
      <div className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 left-3 group-hover:left-1/2 group-hover:-translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white transform transition-transform group-hover:scale-110"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
      </div>

      {/* Text */}
      <span className="ml-3 transition-transform duration-300 group-hover:translate-x-[200%]">
        Send Message
      </span>
    </button>
  );
};

export default SendButton;
