import React from 'react'
import { LuBookText } from "react-icons/lu";

const EducationCard = () => {
  return (
     <div className='w-1/2 h-1/2 p-3 border border-white/10 bg-bgColor/20 rounded-2xl'>
          <div className=" flex h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 p-1  items-center">
          <span className='w-[14px] text-textColor'><LuBookText/></span>
            <p className='text-sm font-light text-textColor'>Education</p>
            
          </div>
        </div>
  )
}

export default EducationCard