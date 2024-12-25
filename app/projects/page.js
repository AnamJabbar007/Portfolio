"use client";
import Image from "next/image";
import {projects} from "@/app/Data/projectsData"
import { FiArrowUpRight } from "react-icons/fi";
import gradientBg from '@/public/gradientBg.svg'


export const Projects = () => {
  return (
    
    <section className="md:p-8 p-2 md:pb-28 pb-12 w-[85%] mx-auto ">
      
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Projects
      </h2>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black/70 p-1 border h-72 w-80  border-white/10 rounded-lg overflow-hidden shadow-md"
          > 
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200} 
              className="w-full h-full relative object-cover rounded-lg border border-white/10 "
            />
             
              <div className="flex absolute bg-bgColor  z- px-6 py-2 backdrop-blur-sm bottom-0 items-center w-full justify-between   ">
              <h3 className="text-base  font-normal  text-white ">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FiArrowUpRight className="text-xl"/>
              </a>
              </div>
            </div>
            {/* <div className="p-4">
             
              <p className="text-white/60 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 text-white text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             
            </div> */}
          </div>
        ))}
      </div>
    </section>

  );
};
export default Projects