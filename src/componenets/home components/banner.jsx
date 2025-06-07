import React from "react";

import Typewriter from "./BannerTextAnimation";

const Banner = () => {
  return (
    <>
      <section className=" h-dvh bg-black banner-custom-height ">
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="">
            <Typewriter />
          </div>
          <div className="w-3/4">
            <div className="border-2 border-white pb-5">
              {" "}
              <div className=" overflow-hidden rounded-full border-b-6 border-red-500 banner-custom-shadow">
                <img src="/banner.png" alt="my image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
