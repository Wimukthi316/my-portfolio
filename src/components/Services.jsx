import React from "react";
import Tilt from "react-parallax-tilt";
import { FaCode, FaMobileAlt, FaLaptopCode, FaSuitcase } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#03070e] py-16 px-6 font-serif relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Services From Me</h2>
        <p className="text-white mt-2">
          Our expertise to help bring your ideas to life
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
        {/* Card Template */}
        {[
          {
            Icon: FaCode,
            title: "Web Development",
            description:
              "Building responsive, high-performance websites with modern technologies.",
          },
          {
            Icon: FaMobileAlt,
            title: "Mobile Development",
            description:
              "Creating cross-platform mobile applications for Android and iOS.",
          },
          {
            Icon: FaLaptopCode,
            title: "UI/UX Design",
            description:
              "Designing intuitive and engaging user experiences.",
          },
        ].map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={300}
            className="flex justify-center items-center"
          >
            <div className="bg-[#30343d] rounded-lg shadow-md p-6 text-center min-h-[250px] w-full transition-all duration-300 flex flex-col justify-center items-center">
              <service.Icon className="text-[#3aa0ff] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-16 left-16 w-16 h-16 bg-[#FFC371] opacity-30 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5F6D] opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-[#34D399] opacity-25 blur-2xl rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#FFD700] opacity-35 blur-3xl rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-[#FF4500] opacity-20 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-10 w-12 h-12 bg-[#7FFFD4] opacity-25 blur-2xl rounded-full animate-bounce"></div>
    </section>
  );
};

export default Services;
