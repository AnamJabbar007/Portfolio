"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { GrCode } from "react-icons/gr";
import gsap from "gsap";

import Nextlogo from "@/public/nextjslogo.png";
import Figmalogo from "@/public/figmalogo.png";
import JSlogo from "@/public/jslogo.png";
import Reactlogo from "@/public/reactlogo.png";

const SkillsCard = () => {
  const cardRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const card = cardRef.current;
    const icons = iconsRef.current;

    // Initial setup for skill logos with individual x, y values
    gsap.set(icons[0], { opacity: 0, scale: 0.5, y: 50 }); // Next.js logo
    gsap.set(icons[1], { opacity: 0, scale: 0.5, x: -50 }); // React logo
    gsap.set(icons[2], { opacity: 0, scale: 0.5, y: -50 }); // Figma logo
    gsap.set(icons[3], { opacity: 0, scale: 0.5, x: 50 }); // JavaScript logo

    // Animate all logos together while respecting individual x, y settings
  
    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(icons[0], {
        opacity: 1,
        scale: 1.5, // Make logos slightly bigger
        y: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.to(icons[1], {
        opacity: 1,
        scale: 1.5, // Make logos slightly bigger
        x: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(icons[2], {
        opacity: 1,
        scale: 1.5, // Make logos slightly bigger
        y: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(icons[3], {
        opacity: 1,
        scale: 1.5, // Make logos slightly bigger
        x: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to('#codeIcon', {
        opacity: 1,
        scale: 0.6, // Make logos slightly bigger
        duration: 0.3,
        color: "#A0A0A0",
        stagger: 0.15,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(icons[0], {
        opacity: 0,
        scale: 0.5, // Make logos slightly bigger
        y: 50,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(icons[1], {
        opacity: 0,
        scale: 1, // Make logos slightly bigger
        x: -50,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(icons[2], {
        opacity: 0,
        scale: 1, // Make logos slightly bigger
        y: -50,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to(icons[3], {
        opacity: 0,
        scale: 1, // Make logos slightly bigger
        x: 50,
        duration: 0.3,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to('#codeIcon', {
        opacity: 1,
        scale: 1, // Make logos slightly bigger
        duration: 0.3,
        stagger: 0.15,
        color: 'white',
        ease: "power3.out",
      });
    };
    
    // Add event listeners
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative md:w-1/3 w-full flex justify-center items-center md:h-[21.4vw] h-80 p-3 border border-white/10 bg-bgColor/20 rounded-2xl shadow-lg"
    >
      {/* Code Icon */}
      <div id="codeIcon" className="rounded-full flex place-content-center border w-fit p-3 relative">
        <GrCode className="text-6xl" />
      </div>

      {/* Skill Logos */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          id="Nextjs"
          className="absolute top-5"
          ref={(el) => (iconsRef.current[0] = el)}
        >
          <Image src={Nextlogo} alt="Next.js" width={40} height={40} />
        </div>
        <div
          id="React"
          className="absolute right-5"
          ref={(el) => (iconsRef.current[1] = el)}
        >
          <Image src={Reactlogo} alt="React" width={40} height={40} />
        </div>
        <div
          id="Figma"
          className="absolute bottom-5"
          ref={(el) => (iconsRef.current[2] = el)}
        >
          <Image src={Figmalogo} alt="Figma" width={40} height={40} />
        </div>
        <div
          id="JsLogo"
          className="absolute left-5"
          ref={(el) => (iconsRef.current[3] = el)}
        >
          <Image src={JSlogo} alt="JavaScript" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
