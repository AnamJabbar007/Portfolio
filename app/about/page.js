import Image from "next/image";
import CatImage from "@/public/Boy.jpg";
import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const socialLinks = [
    { icon: <LuLinkedin />, text: "Follow on LinkedIn", hoverText: "Follow on LinkedIn" },
    { icon: <FiGithub />, text: "Follow on GitHub", hoverText: "Follow on GitHub" },
    { icon: <IoLogoInstagram />, text: "Follow on Instagram", hoverText: "Follow on Instagram" },
    { icon: <FiMail />, text: "Send Email", hoverText: "Send Email" },
  ];

  return (
    <section id="about" className="w-full flex content-center ">
      <div className="w-5/6 flex gap-8 flex-row mx-auto py-24">
        {/* Text Div */}
        <div className="w-7/12 flex flex-col">
          <h3 className="text-5xl text-textColor font-bold leading-tight">
            I am Anam Jabbar, Frontend Web-developer
          </h3>
          <p className="w-11/12 font-normal leading-7 text-base text-lightgray">
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
        {/* Image Div */}
        <div>
          <Image
            className="w-[460px] h-[460px] rounded-3xl"
            src={CatImage}
            width={512}
            height={512}
            alt="SelfImage"
          />
          <div className="grid w-11/12 my-10 mx-auto text-center grid-cols-2 gap-4 justify-center items-center">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="relative group font-medium gap-4 text-sm flex justify-start items-end text-lightgray"
              >
                {/* Default State */}
                <div className="flex items-center gap-2 group-hover:hidden">
                  <div className="text-gray-400 text-xl">
                    {link.icon}
                  </div>
                  <span className="font-medium text-sm  text-lightgray">{link.text}</span>
                </div>

                {/* Hover State */}
                <div className="absolute cursor-pointer inset-0 flex items-center justify-start gap-2 opacity-0 group-hover:opacity-100 group-hover:flex transition-opacity duration-300">
                  <span className="text-white">{link.hoverText}</span>
                  <span className="text-white"><MdArrowOutward/></span>
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
