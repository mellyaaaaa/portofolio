import React from "react";
import hero from "../assets/hero.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          {/* Bagian Kiri */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-6 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-snug">
              Hi There, I'm <span className="text-red-500">Melly</span> Anggraini
            </h1>
            <p className="md:text-2xl text-xl mb-6">Frontend Developer</p>
            <p className="text-lg mb-8 text-justify">
            As a passionate and skilled front-end developer, I excel at creating engaging, user-centric websites with an emphasis on visual appeal and seamless functionality. 
            With extensive experience in React.js and modern web technologies, I am committed to delivering impactful digital solutions that enhance the user experience and solve real-world challenges.
            </p>
          </div>
          {/* Bagian Kanan */}
          <div className="md:w-1/2 relative flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-96 h-96 md:w-128 md:h-128 border-4 border-red-400 shadow-lg">
              <img src={hero} alt="Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Ikon Sosial Media */}
      <div className="absolute top-40 right-10 hidden md:flex flex-col gap-8 rounded-full bg-gray-200 p-6 shadow-xl">
        <a
          href="https://github.com/mellyaaaaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-700"
        >
          <FaGithub className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/mellyanggr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-700"
        >
          <FaLinkedin className="w-12 h-12" />
        </a>
        <a
          href="https://www.instagram.com/mynamelly_?igsh=cGh1ZTA4djYzZ3F0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-700"
        >
          <FaInstagram className="w-12 h-12" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
