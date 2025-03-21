import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub, FiMail } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { RiFileList3Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";

export const socialLinks = [
  { 
    icon: <IoLogoInstagram />, 
    hoverIcon: <MdArrowOutward />, 
    url: "https://www.instagram.com/yourprofile", 
    text: "Follow on Instagram",
    hoverText: "Follow on Instagram" 
  },
  { 
    icon: <FiGithub />, 
    hoverIcon: <MdArrowOutward />, 
    url: "https://github.com/yourprofile",
    text: "Follow on Github",
    hoverText: "Follow on Github" 
  },
  { 
    icon: <LuLinkedin />, 
    hoverIcon: <MdArrowOutward />, 
    url: "https://linkedin.com/in/yourprofile", 
    text: "Follow on LinkedIn",
    hoverText: "Follow on LinkedIn" 
  },
  { 
    icon: <FiMail />, 
    hoverIcon: <MdArrowOutward />, 
    url: "mailto:your-email@example.com" ,
    text: "Send Email",
    hoverText: "Send Email" 
    
  },
  { 
    icon: <RiFileList3Line />, 
    hoverIcon: <MdArrowOutward />, 
    url: "/your-resume.pdf", // Local resume file or hosted link
    text: "See Resume",
    hoverText: "See Resume" 

  },
];
