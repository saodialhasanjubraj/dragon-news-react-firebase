import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <div className="join join-vertical w-full">
        <button className="btn join-item w-full bg-base-100 flex justify-start border-2">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item w-full bg-base-100 flex justify-start border-2">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn join-item w-full bg-base-100 flex justify-start border-2">
          <FaTwitter />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
