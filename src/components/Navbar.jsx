import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-5">
      <div className=""></div>
      <div className="nav w-50 gap-5 flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="loginBox flex items-center justify-center">
        <FaRegUserCircle className="text-4xl" />
        <button className="bg-primary text-white px-8 py-1 rounded-sm">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
