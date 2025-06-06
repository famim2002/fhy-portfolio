import React from "react";

import Typewriter from "./BannerTextAnimation"

const Banner = () => {
  return (
    <>
      <section className="banner-parallax">
        <div className="container">
          <div>
            <Typewriter/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
