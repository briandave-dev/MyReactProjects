import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-50">
        <ul className="text-center text-xl p-20">
        <NavLink to="/" onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </NavLink>
          <NavLink to="/home" onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Project1
            </li>
          </NavLink>
          <NavLink to="/about" onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Project2
            </li>
          </NavLink>
          <NavLink to="/contact" onClick={handleClick}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Games
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-slate-900">
      <div className="h-10vh flex justify-between text-white lg:py-5 px-8 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Dave_Dev</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
            <NavLink to="/" className="active:underline">
                <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all active:text-red-800 active:underline">
                  Home
                </li>
              </NavLink>
              <NavLink to="/home" className="active:underline">
                <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all active:text-red-800 active:underline">
                  Project1
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all">
                  Project2
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="hover:cursor-pointer hover:underline hover:text-red-800 transition-all">
                  Games
                </li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="">{click && content}</div>

        <button className="block sm:hidden" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
