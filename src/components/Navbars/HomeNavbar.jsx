import React from "react";
import logo from "../../assets/fabIcon.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="absolute  flex w-full  p-4 px-8 justify-between items-center  ">
        <div className="  ">
          <img src={logo} className="h-10" alt="" />
        </div>

        {/* navigation */}

        <div className="hidden md:flex text-white font-semibold ">
          <Link to="/">
            <a href="" className="hover:underline px-2">
              Home
            </a>
          </Link>
          <Link to="about">
            <a href="" className="hover:underline px-2">
              About Us
            </a>
          </Link>

          <Link to="programs">
            <a href="" className="hover:underline px-2">
              Programs
            </a>
          </Link>

          <Link to="fabClass">
            <a href="" className="hover:underline px-2">
              Fab class
            </a>
          </Link>

          <Link to="ourServices">
            <a href="" className="hover:underline px-2">
              Our services
            </a>
          </Link>

          <Link to="machines">
            <a href="" className="">
              Machines
            </a>
          </Link>

          <Link to="events">
            <a href="" className="hover:underline px-2">
              Events
            </a>
          </Link>

          <Link to="getQuote">
            <a href="" className="hover:underline px-2">
              Get a quote
            </a>
          </Link>
          <Link to="/dashboard">
            <a href="" className="hover:underline px-2">
              Dashboard
            </a>
          </Link>
          <Link to="/eventRegister">
            <a href="" className="hover:underline px-2">
              EventRegister
            </a>
          </Link>
        </div>

        <div className="md:hidden text-4xl text-white ">
          <BiMenuAltRight />
        </div>
      </div>
    </>
  );
};

export default Nav;
