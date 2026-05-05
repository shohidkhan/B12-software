import React from "react";
import { Link, NavLink } from "react-router";
//add navbar css
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="nav-item mx-2" to="/">
          <span className="gradient-text">Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink className="nav-item mx-2" to="/apps">
          <span className="gradient-text">Apps</span>
        </NavLink>
      </li>

      <li>
        <NavLink className="nav-item mx-2" to="/installation">
          <span className="gradient-text">Installation</span>
        </NavLink>
      </li>
      {/* <li>
        <NavLink className="btn mx-2" to="/">
          Pages to read
        </NavLink>
      </li> */}
    </>
  );
  return (
    <div>
      <div className="bg-base-100">
        <div className="navbar px-15">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a
              href="/"
              className="cursor-pointer flex gap-2 items-center text-sm font-bold bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"
            >
              <img src={logo} className="w-[30px]" alt="" />
              HERO.IO
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn border-none  bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white hover:opacity-90 transition-opacity">
              <FaGithub /> Contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
