import Image from 'next/image'
import React from 'react'
import SkillsSet from '@/public/Group 31.png'

const SkillsCard = () => {
  return (
    <div className="relative overflow-hidden  md:w-1/3 w-full  md:h-[21.4vw] h-80 p-0 border  border-white/10 bg-bgColor/20 rounded-2xl shadow-lg group"
>
   {/* <div className="flex h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 py-1 px-2 items-center">
          <span className="w-[14px] text-textColor">
            <GoProjectSymlink />
          </span>
          <p className="text-sm font-normal  text-textColor">Projects</p>
        </div> */}
        <div className="w-full flex place-content-center">
          {/* Overlay */}
          <div className="bg-black/40 w-full h-full absolute"></div>
          <Image  width={500} height={500} src={SkillsSet} />
        </div>
</div>
  )
}

export default SkillsCard