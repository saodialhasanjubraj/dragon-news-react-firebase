import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classsImage from "../../assets/class.png";
import playGroundImage from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200">
      Qzone
      <div className="imageBox flex flex-col space-y-3">
        <img src={swimmingImage} alt="" srcset="" />
        <img src={classsImage} alt="" srcset="" />
        <img src={playGroundImage} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Qzone;
