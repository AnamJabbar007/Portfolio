"use client";
import Image from "next/image";
import { projects } from "@/app/Data/projectsData";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const TRANSITION = { type: "spring", stiffness: 300, damping: 50 };

const cardVariants = {
  hidden: {
    y: 150,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: TRANSITION,
  },
};

export const Projects = () => {
  return (
    <section className="md:p-8  p-2 md:pb-28 pb-12 xl:w-[90%] w-[85%] mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Projects</h2>

      {/* Grid Container */}
      <div className="grid place-items-center 2xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {projects.map((project) => (
          <motion.div
            initial="hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate="visible"
            variants={cardVariants}
            key={project.id}
            className="bg-black/70 p-1 border h-64 w-72 lg:h-72 lg:w-80 md:h-56 md:w-64 border-white/10 rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-full relative object-cover rounded-lg border border-white/10"
              />
              <div className="flex absolute z-10 px-6 py-2 backdrop-blur-sm bottom-0 items-center w-full justify-between">
                <h3 className="text-base font-normal text-white">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FiArrowUpRight className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
