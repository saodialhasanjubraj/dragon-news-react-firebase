import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-base-200 w-full h-20 flex items-center justify-start px-5">
      <h1 className="h-12 w-27.5 bg-secondary text-white text-center flex items-center justify-center">
        Latest
      </h1>

      <Marquee pauseOnHover={true} speed={60} className="gap-5">
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
        <p>Match Highlights: Germany vs Spain — as it happened !</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
