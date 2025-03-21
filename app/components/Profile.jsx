import Image from "next/image";
import Avatar from "@/public/Avatar.png";
import { socialLinks } from '@/app/constants/Index'; // Adjust the path as needed

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

        {/* Icons with Hover Effect and Links */}
        <div className="flex flex-row gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-gray-400 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5"
            >
              {/* Default State */}
              <div className="absolute inset-0 text-2xl flex justify-center items-center group-hover:opacity-0 transition-opacity duration-300">
                {link.icon}
              </div>

              {/* Hover State */}
              <div className="absolute text-white text-lg cursor-pointer inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.hoverIcon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
