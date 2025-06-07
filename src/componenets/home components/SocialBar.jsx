import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router";

const SocialBar = () => {
  return (
    <div className="">
      <div className="flex gap-6 ">
        <Link
          to="/"
          className="text-red-600 text-[40px] border-5 border-black rounded-full outline-4 cursor-pointer transition-all hover:outline-white hover:scale-110"
        >
          <GrInstagram />
        </Link>

        <Link
          to="/"
          className="text-red-600 text-[40px] border-5  border-black rounded-full outline-4 cursor-pointer transition-all hover:outline-white hover:scale-110"
        >
          <FaLinkedin />
        </Link>

        <Link
          to="/"
          className="text-red-600 text-[40px] border-5 border-black rounded-full outline-4 cursor-pointer transition-all hover:outline-white hover:scale-110"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
