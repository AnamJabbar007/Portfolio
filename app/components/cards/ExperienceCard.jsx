import Image from "next/image";
import React from "react";
import { PiSuitcaseBold} from "react-icons/pi";
import { LuDownload } from "react-icons/lu";

const ExperienceCard = () => {
  return (
    <div className="md:w-1/2 w-fit md:h-[21.4vw] h-80 p-3  border border-white/10 bg-bgColor/20 rounded-2xl">
      {/* Header */}
      <div className="flex  h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 py-1 px-2  items-center">
        <span className="w-[14px] text-textColor">
          <PiSuitcaseBold />
        </span>
        <p className="text-sm font-light text-textColor">Experience</p>
      </div>

      {/* Experience Details */}
      <div className="h-2/3 w-full  px-2 my-3 gap-4 overflow-y-scroll">
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            {/* Icon/Logo Placeholder */}
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold">
              CB
            </div>

            {/* Title */}
            <h5 className="text-base font-medium">CodeBlog</h5>
          </div>
          {/* Description */}
          <p className="text-sm pl-10 font-light text-lightgray">
            A blog page made with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            {/* Icon/Logo Placeholder */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gray-400 to-purple-400  flex items-center justify-center text-white font-bold">
              AP
            </div>

            {/* Title */}
            <h5 className="text-base font-medium">Animated Portfolio</h5>
          </div>
          {/* Description */}
          <p className="text-sm pl-10 font-light text-lightgray">
            A blog page made with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            {/* Icon/Logo Placeholder */}
            <div className="w-8 h-8 rounded-lg bg-amber-900 flex items-center justify-center text-white font-bold">
              BS
            </div>

            {/* Title */}
            <h5 className="text-base font-medium">Book Search App</h5>
          </div>
          {/* Description */}
          <p className="text-sm pl-10 font-light text-lightgray">
            A blog page made with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            {/* Icon/Logo Placeholder */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gray-400 to-red-400  flex items-center justify-center text-white font-bold">
              PP
            </div>

            {/* Title */}
            <h5 className="text-base font-medium">Persnol Portfolio</h5>
          </div>
          {/* Description */}
          <p className="text-sm pl-10 font-light text-lightgray">
            A blog page made with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            {/* Icon/Logo Placeholder */}
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold">
              CB
            </div>

            {/* Title */}
            <h5 className="text-base font-medium">CodeBlog</h5>
          </div>
          {/* Description */}
          <p className="text-sm pl-10 font-light text-lightgray">
            A blog page made with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
      {/* Bottom Buttons */}
      <div className="flex justify-center cursor-pointer h-auto w-full border border-white/10 bg-bgColor/20 rounded-md gap-x-2 py-1.5 text-lightgray px-1 items-center hover:bg-bgColor/80 hover:text-textColor">
        <span className="w-[14px]  ">
          <LuDownload />
        </span>
        <p className="text-sm font-light text-textColor">Download CV</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
