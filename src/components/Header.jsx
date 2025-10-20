import React from "react";
import { brandImage } from "../../public/BrandLogo";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="w-full flex flex-col mt-10 items-center">
      <img className="w-117 h-15 mb-2.5" src={brandImage} alt="" srcset="" />
      <p>Journalism Without Fear or Favour</p>
      <h1>{format(new Date(), "EEEE, MMMM, d, uuuu")}</h1>
    </div>
  );
};

export default Header;
