import React from "react";

import Typewriter from "./BannerTextAnimation";

const Banner = () => {
  return (
    <>
      <section className="bg-black banner-custom-height ">
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="">
            <Typewriter />
          </div>
          <div className="pb-5">
            {" "}
            <div className=" overflow-hidden rounded-full border-b-6 border-red-500 banner-custom-shadow">
              <img src="/banner.png" alt="my image" />
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Banner;
