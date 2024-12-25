"use client";
import { GoPerson } from "react-icons/go";
import { IoCode } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import Avatar from "@/public/Avatar.png";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { usePathname } from "next/navigation";



export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed backdrop-blur-md bottom-0 pb-5 w-full flex justify-center items-center">
      <nav className="lg:w-1/3 z-[100] p-1.5  backdrop-blur-lg sm:w-1/2 flex justify-evenly flex-row gap-4 w-[80%] lg:h-16 sm:h-14 h-12 border border-white/10 bg-bgColor/20 rounded-2xl">
        {/* icons */}
        <div className="flex justify-evenly items-center w-full flex-row">
          <div className="w-12 h-12 group rounded-full bg-black/70 border border-white/10 hover:scale-150 hover:mb-5 "
          onClick={() => router.push("/")}>
            <Image src={Avatar} alt="Avatar" sizes="20" />
            <span className="absolute bottom-16 p-1 mb-2 border border-white/10 flex justify-center items-center bg-customLightGray/75 text-white/40 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </div>
          <div
           className={`w-12 h-12 group flex justify-center items-center rounded-full border border-white/10 cursor-pointer hover:scale-150 hover:mb-5 ${
            pathname === "/about" ? "bg-gray-900" : "bg-black/70"
          }`}
          
            onClick={() => router.push("/about")}
          >
            <GoPerson size={20} />
            <span className="absolute bottom-16 p-1 mb-2 border border-white/10 flex justify-center items-center bg-customLightGray/75 text-white/40 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </div>
          <div className="w-12 group h-12 flex justify-center items-center rounded-full bg-black/70 border border-white/10 hover:scale-150 hover:mb-5"
          onClick={() => router.push("/projects")}>
            <IoCode size={20} />
            <span className="absolute bottom-16 p-1 mb-2 border border-white/10 flex justify-center items-center bg-customLightGray/75 text-white/40 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Projects
            </span>
          </div>
          {/* Separation */}
          <div className="border border-white/10 h-full"></div>
          <div className="w-12 h-12 group flex justify-center items-center rounded-full bg-black/70 border border-white/10 hover:scale-150 hover:mb-5">
            <FiMail size={20} />
            <span className="absolute bottom-16 p-1 mb-2 border border-white/10 flex justify-center items-center bg-customLightGray/75 text-white/40 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Email
            </span>
          </div>
          <div className="w-12 h-12 group flex justify-center items-center rounded-full bg-black/70 border border-white/10 hover:scale-150 hover:mb-5">
            <IoMoonOutline size={20} />
            <span className="absolute bottom-16 p-1 mb-2 border border-white/10 flex justify-center items-center bg-customLightGray/75 text-white/40 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Theme
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
