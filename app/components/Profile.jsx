import Image from 'next/image'
import Avatar from "@/public/Avatar.png"
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { RiFileList3Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

export const Profile = () => {
  return (
    <section id='Profile' className='h-[80vh] w-full flex justify-center items-center lg:p-24 sm:p-10 p-6'>
          
      <div className="h-[60vh] w-5/6 flex flex-col justify-center items-start    rounded-2xl">
      <div className="w-20 h-20 flex justify-center items-center rounded-full  bg-bgColor border border-white/10 mb-4 ">
      
      <Image src={Avatar} alt="Avatar"  />
      </div>
      <div className="">
      <h3 className='font-bold lg:text-4xl md:text-3xl text-2xl text-white'>Anam Jabbar</h3>
      <p className='font-normal lg:text-base md:text-sm text-xs mt-2 text-white/80'> I am a front-end developer who builds modern, user-friendly websites.<br/>
      I enjoy creating clean designs and smooth interactions for the web.</p>
      </div>
      {/* icons */}
      <div className="flex flex-row gap-6 mt-8">
        <div className="">
          <IoLogoInstagram className='text-gray-400 w-6 h-6'/>
        </div>
        <div className="">
          <FiGithub className='text-gray-400 w-6 h-6'/>
        </div>
        <div className="">
          <LuLinkedin className='text-gray-400 w-6 h-6'/>
        </div>
        <div className="">
          <RiFileList3Line className='text-gray-400 w-6 h-6'/>
        </div>
        <div className="">
          <FiMail className='text-gray-400 w-6 h-6'/>
        </div>
      </div>
      </div>
    </section>
  )
}
