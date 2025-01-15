import Image from "next/image";
import Avatar from "@/public/Avatar.png";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { RiFileList3Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";

export const Profile = () => {
  return (
    <section
      id="Profile"
      className="min-h-[80vh] xl:min-h-[90vh] w-full flex justify-center items-center xl:p-4 lg:p-24 md:p-16 sm:p-10 p-6"
    >
      <div className="h-auto w-full max-w-4xl flex flex-col justify-center items-start rounded-2xl">
        {/* Avatar Section */}
        <div className="w-20 h-20 sm:w-16 sm:h-16 flex justify-center items-center rounded-full bg-bgColor border border-white/10 mb-4">
          <Image src={Avatar} alt="Avatar" />
        </div>

        {/* Name and Description */}
        <div>
          <h3 className="font-bold lg:text-4xl md:text-3xl text-2xl text-white">
            Anam Jabbar
          </h3>
          <p className="font-normal lg:text-base md:text-sm text-xs mt-2 text-white/80">
            I am a front-end developer who builds modern, user-friendly
            websites.
            <br />
            I enjoy creating clean designs and smooth interactions for the web.
          </p>
        </div>

        {/* Icons */}
        <div className="flex flex-row gap-6 mt-8">
          <IoLogoInstagram className="text-gray-400 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5" />
          <FiGithub className="text-gray-400 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5" />
          <LuLinkedin className="text-gray-400 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5" />
          <RiFileList3Line className="text-gray-400 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5" />
          <FiMail className="text-gray-400 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
