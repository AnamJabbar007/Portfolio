import Image from "next/image";
import CatImage from "@/public/Boy.jpg";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { socialLinks } from "../constants/Index";

const About = () => {
  const filteredSocialLinks = socialLinks.filter(link => link.text !== "See Resume");
  return (
    <section id="about" className="w-full flex content-center ">
      <div className="container mx-auto px-4 lg:p-28 md:p-18 flex flex-col-reverse md:flex-row gap-8 py-16">
        {/* Text Section */}
        <div className="md:w-7/12 w-full flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            I am Anam Jabbar, Frontend Web Developer
          </h3>
          <p className="text-lightgray text-sm md:text-base md:pr-16 leading-7">
            <b className="font-semibold">I am a front-end developer</b> with a strong focus on creating modern,
            user-friendly web applications. With a passion for clean designs and
            seamless interactions, I strive to build websites that are both
            visually appealing and highly functional.
            <br />
            My experience includes working on various projects such as landing
            pages, user interfaces, and responsive designs, where I prioritize
            delivering exceptional user experiences. I specialize in using
            technologies like <b className="font-semibold">Next.js, React, Tailwind CSS, HTML, CSS,
            JavaScript, Git, and GitHub</b> to develop fast, accessible, and
            optimized websites that work effortlessly across devices.
            <br />I am driven by a love for blending creativity with technical
            expertise, ensuring every project I work on meets the highest
            standards of usability and performance. My goal is to continuously
            improve the interactive experience, making sure that each detail
            adds value to the user’s journey.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="md:w-5/12 w-full flex flex-col items-center">
          <Image
            className="w-full max-w-[460px] h-auto rounded-3xl"
            src={CatImage}
            width={512}
            height={512}
            alt="Self Image"
          />
          <div className="grid w-full max-w-sm my-10 text-center grid-cols-2 gap-4">
            {filteredSocialLinks.map((link, index) => (
              <div
                key={index}
                className="relative group font-medium gap-4 text-sm flex justify-start items-end text-lightgray"
              >
                {/* Default State */}
                <div className="flex cursor-pointer items-center gap-2 group-hover:hidden">
                  <div className="text-gray-400 text-xl">{link.icon}</div>
                  <span className="font-medium text-sm text-lightgray">{link.text}</span>
                </div>

                {/* Hover State */}
                <div className="absolute cursor-pointer inset-0 flex items-center justify-start gap-2 opacity-0 group-hover:opacity-100 group-hover:flex transition-opacity duration-300">
                  <span className="text-white">{link.hoverText}</span>
                  <span className="text-white">
                    <MdArrowOutward />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

