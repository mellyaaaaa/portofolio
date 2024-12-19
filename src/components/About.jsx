import React from "react";
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiPhp, 
  SiMysql 
} from "react-icons/si"; // Importing React Icons

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Melly Anggraini
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A front-end developer with expertise in building user-friendly websites and applications, 
              using modern web technologies such as React.js to deliver engaging and efficient digital experiences.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* My Journey */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600 text-justify">
                  I started my journey as a web developer driven by a strong passion for creating intuitive and visually appealing applications. 
                  Specializing in front-end development and creating seamless user experiences with React.js, I have also gained hands-on experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
                  This versatile skill set allows me to build dynamic, responsive websites and collaborate effectively throughout the development lifecycle. Committed to modern web technologies and user-centered design, 
                  I strive to deliver efficient, scalable, and impactful solutions in every project I undertake.
                </p>
              </div>

              {/* Skill & Expertise */}
              <div className="border border-red-200 rounded-lg py-5 px-4 shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600 mb-4 text-center">
                  Skill & Expertise
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                  {/* HTML */}
                  <div className="flex flex-col items-center">
                    <SiHtml5 className="w-14 h-14 text-[#E34F26]" />
                    <p className="mt-2 text-sm font-medium">HTML</p>
                  </div>
                  {/* CSS */}
                  <div className="flex flex-col items-center">
                    <SiCss3 className="w-14 h-14 text-[#1572B6]" />
                    <p className="mt-2 text-sm font-medium">CSS</p>
                  </div>
                  {/* JavaScript */}
                  <div className="flex flex-col items-center">
                    <SiJavascript className="w-14 h-14 text-[#F7DF1E]" />
                    <p className="mt-2 text-sm font-medium">JavaScript</p>
                  </div>
                  {/* React */}
                  <div className="flex flex-col items-center">
                    <SiReact className="w-14 h-14 text-[#61DAFB]" />
                    <p className="mt-2 text-sm font-medium">React.js</p>
                  </div>
                  {/* Tailwind CSS */}
                  <div className="flex flex-col items-center">
                    <SiTailwindcss className="w-14 h-14 text-[#38B2AC]" />
                    <p className="mt-2 text-sm font-medium">Tailwind CSS</p>
                  </div>
                  {/* PHP */}
                  <div className="flex flex-col items-center">
                    <SiPhp className="w-14 h-14 text-[#777BB3]" />
                    <p className="mt-2 text-sm font-medium">PHP</p>
                  </div>
                  {/* Node.js */}
                  <div className="flex flex-col items-center">
                    <SiNodedotjs className="w-14 h-14 text-[#68A063]" />
                    <p className="mt-2 text-sm font-medium">Node.js</p>
                  </div>
                  {/* MongoDB */}
                  <div className="flex flex-col items-center">
                    <SiMongodb className="w-14 h-14 text-[#47A248]" />
                    <p className="mt-2 text-sm font-medium">MongoDB</p>
                  </div>
                  {/* Express.js */}
                  <div className="flex flex-col items-center">
                    <SiExpress className="w-14 h-14 text-[#000000]" />
                    <p className="mt-2 text-sm font-medium">Express.js</p>
                  </div>
                  {/* MySQL */}
                  <div className="flex flex-col items-center">
                    <SiMysql className="w-14 h-14 text-[#4479A1]" />
                    <p className="mt-2 text-sm font-medium">MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* More About Me */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
              <p className="mt-4 text-lg text-gray-600 text-justify">
              In addition to coding, I am committed to expanding my knowledge of MERN stack development, 
              constantly striving to improve my skills and keep up with the latest trends in the field. 
              Outside of coding, I thrive on problem solving and collaborating with others to create impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
