import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";

const RightAside = () => {
  return (
    <div className="flex flex-col space-y-5">
      <SocialLogin />
      <FindUs />
      <Qzone />
    </div>
  );
};

export default RightAside;
