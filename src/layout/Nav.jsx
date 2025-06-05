import React, { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Link } from "react-router"


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="#">Logo</a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="#" className=" text-[20px] text-white font-pixelFont">
                  home
                </Link>
              </li>
              <li>
                <Link to="#" className=" text-[20px] text-white font-pixelFont">
                  about
                </Link>
              </li>
              <li>
                <Link to="#" className=" text-[20px] text-white font-pixelFont">
                  services
                </Link>
              </li>
              <li>
                <Link to="#" className=" text-[20px] text-white font-pixelFont">
                  project
                </Link>
              </li>
              <li>
                <Link to="#" className="bg-red-600 text-[20px] text-white font-pixelFont">
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="cursor-pointer outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <PiDotsThreeOutlineFill className="text-[35px] text-white" />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className="mt-4 space-y-4">
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-[30px] text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-[30px] text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-[30px] text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-[30px] text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow"
              >
                demo
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="bg-red-600 block px-4 py-2 text-[30px] font-pixelFont text-white  rounded  "
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
