import React from "react";
import { FaGithub } from "react-icons/fa";

const Cards = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-lg w-full max-w-[500px] bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Project Image */}
      <div className="w-full h-[250px] overflow-hidden rounded-t-lg">
        <img
          src={item.image || "https://via.placeholder.com/500x250"}
          alt={item.title || "Project Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col justify-between h-auto">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p className="text-gray-600">{item.desc}</p>

        {/* GitHub Button */}
        {item.github && (
          <div className="mt-4">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
