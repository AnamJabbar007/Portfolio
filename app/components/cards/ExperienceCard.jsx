import React from 'react'
import { PiSuitcaseBold } from "react-icons/pi";

const ExperienceCard = () => {
  return (
    <div className='w-1/2 h-1/2 p-3 border border-white/10 bg-bgColor/20 rounded-2xl'>
      <div className=" flex h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 p-1  items-center">
      <span className='w-[14px] text-textColor'><PiSuitcaseBold/></span>
        <p className='text-sm font-light text-textColor'>Experience</p>
        
      </div>
    </div>
  )
}

export default ExperienceCard