import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="" className="text-md md:text-2xl font-bold text-gradient">
        <p>ResumeLens AI</p>
      </Link>

      <Link to="" className="primary-button w-fit capitalize">upload resume</Link>
    </nav>
  );
};

export default Navbar;
