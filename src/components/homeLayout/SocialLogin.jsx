import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Log in with</h2>
      <div className="socialSide space-y-3">
        <button className="btn w-full text-secondary">
          <FaGoogle className="text-sky-500" size={24} />
          Login With Google
        </button>
        <button className="btn w-full text-primary">
          <FaGithub size={24} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
