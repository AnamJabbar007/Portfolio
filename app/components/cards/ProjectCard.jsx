"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GoProjectSymlink } from "react-icons/go";
import gsap from "gsap";

// Array of image paths
const images = [
  "/WebUi2.png",
  "/HooBank2.png",
  "/Bookweb2.png",
  "/ChiliStudio2.png",

  // Add more image paths here
];

const ProjectCard = () => {
  const [randomIndex, setRandomIndex] = useState(0); // Track the random image index
  const cardRef = useRef(null);

  useEffect(() => {
    // Select a random index for the image
    const randomIdx = Math.floor(Math.random() * images.length);
    setRandomIndex(randomIdx);

    // Card entrance animation
    gsap.fromTo(
      cardRef.current,
      { y: 150, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative md:w-1/3 w-full  md:h-[21.4vw] h-80 p-3 border  border-white/10 bg-bgColor/20 rounded-2xl shadow-lg group"
    >
      {/* Header */}
      <div className="flex h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 py-1 px-2 items-center">
        <span className="w-[14px] text-textColor">
          <GoProjectSymlink />
        </span>
        <p className="text-sm font-normal  text-textColor">Projects</p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-full flex justify-center items-center pb-4">
        {/* Images Stack */}
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute w-5/6  hover:opacity-20 transition-all duration-500 ${
              index === randomIndex
                ? "z-10 opacity-100"
                : "z-0 opacity-50 "
            }`}
            style={{
              transform: `rotate(${(index - randomIndex) * 5}deg)`,
            }}
          >
            <Image
              className="rounded-lg h-48 w-full object-cover"
              width={500}
              height={300}
              src={image}
              alt={`Project Preview ${index + 1}`}
            />
          </div>
        ))}

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 backdrop-blur-md bg-black/50 transition-all duration-500 z-30">
          <a href="/projects"  className=" border-white/10 border-4 border-double  bg-bgColor/70 hover:bg-bgColor/80 py-1 px-2 rounded-lg text-white text-base font-normal">
            See Projects
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
