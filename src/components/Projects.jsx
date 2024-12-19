import React from "react";
import WebEcommerce from "../assets/WebEcommerce.png";
import NotesApp from "../assets/NotesApp.png";
import WebFilm from "../assets/WebFilm.png";
import WebKreatikode from "../assets/WebKreatikode.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Web Ecommerce",
      desc: "Built a simple e-commerce website with a responsive design that showcases products in a clean, user-friendly layout. Utilized semantic HTML, CSS, and JavaScript for accessibility and cross-device compatibility, demonstrating core web development skills.",
      image: WebEcommerce,
      github: "https://github.com/mellyaaaaa/web-html",
    },
    {
      title: "E-learning Kreatikode",
      desc: "Developed an interactive e-learning platform for creative coding tutorials using the MERN stack. The website features engaging lessons, progress tracking, and a responsive design for both mobile and desktop. Ensured scalability, performance, and secure user authentication. The platform encourages creativity and provides accessible learning with collaborative features and dynamic content.",
      image: WebKreatikode,
      github: "https://github.com/ranggamuktii/elearning-kreatikode",
    },
    {
      title: "Web Film",
      desc: "Created a movie review website that showcases both trending and recent movies, with a clean and modern interface that allows users to search and filter movies based on different criteria. Developed using HTML, CSS and JavaScript.",
      image: WebFilm,
      github: "https://github.com/mellyaaaaa/TugasMinggu4",
    },
    {
      title: "Notes App",
      desc: "Developed a simple yet efficient notes application using Kotlin, designed to improve productivity by allowing users to seamlessly create, read, update and delete notes. The application supports basic CRUD functionality with a clean and intuitive user interface.",
      image: NotesApp,
    },
  ];

  return (
    <section className="relative bg-gray-700 py-16 px-6" id="Projects">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 border-b-4 border-red-500 pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center">
          {projectJson.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
