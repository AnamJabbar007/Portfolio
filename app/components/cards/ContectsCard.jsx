import React from "react";
import { LuMessageCircle } from "react-icons/lu";

const ContectsCard = () => {
  return (
    <div className="relative md:w-1/3 w-full h-fit  p-3 border border-white/10 bg-bgColor/20 rounded-2xl shadow-lg group">
      {/* Header */}
      <div className="flex h-auto w-fit border border-white/10 bg-bgColor/20 rounded-2xl gap-x-2 py-1 px-3 items-center">
        <span className="w-[14px] text-textColor">
          <LuMessageCircle />
        </span>
        <p className="text-sm font-normal text-textColor">Contact</p>
      </div>

      {/* Description */}
      <p className="mt-4 mb-6 text-textColor text-sm">
        Feel free to reach out for collaborations, inquiries, or just to say hi!
      </p>

      {/* Buttons */}
      <div className="w-full gap-2 flex">
        {/* Email Button */}
        <a
          href="mailto:kokomomujhe@gmail.com"
          className="flex justify-center cursor-pointer w-1/2 border border-white/10 hover:shadow-lg bg-bgColor/20 rounded-md md:p-2 p-1 items-center md:text-sm text-xs font-normal text-textColor"
        >
          Send me an Email
        </a>

        {/* Instagram Button */}
        <a
          href="https://instagram.com/your-instagram-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center cursor-pointer w-1/2 border border-white/10 hover:shadow-lg bg-bgColor/20 rounded-md md:p-2 p-1 items-center md:text-sm text-xs font-normal text-textColor"
        >
          DM on Instagram
        </a>
      </div>
    </div>
  );
};

export default ContectsCard;
