import React from 'react';
import { LuBookText } from "react-icons/lu";

const EducationCard = () => {
  return (
    <div className="md:w-1/2 w-full md:h-[21.4vw] h-80 p-3  border border-white/10 bg-bgColor/20 rounded-2xl">
      {/* Header */}
      <div className="flex h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 py-1 px-2 items-center">
        <span className="w-[14px] text-textColor">
          <LuBookText />
        </span>
        <p className="text-sm font-light text-textColor">Education</p>
      </div>

      {/* Education Details */}
      <ul className=" space-y-4 my-5">
        {/* Intermediate */}
        <li className='space-y-1'>
        <time className="block border-l-2 rounded-sm pl-2 border-white font-medium text-sm text-lightgray">2024 - continue</time>
          <h3 className="font-semibold text-base">Intermediate</h3>
         
          <p className="font-medium text-textColor/85 text-sm">GGDC Bhan Sayedabad</p>
        </li>

        {/* Matriculation */}
        <li className='space-y-1'>
        <time className="block border-l-2 rounded-sm pl-2 border-white font-medium text-sm text-lightgray">2022 - 2023</time>
          <h3 className="font-semibold  text-base">Matriculation</h3>
          
          <p className="font-medium text-textColor/85 text-sm">GBHS Khair Muhammad Panhwar</p>
        </li>
      </ul>
    </div>
  );
};

export default EducationCard;
