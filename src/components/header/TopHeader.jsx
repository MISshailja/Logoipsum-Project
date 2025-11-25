import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/Vector.png"
import { GoArrowUpRight } from "react-icons/go";
const TopHeader = () => {

  return (
    <>
    <div className="min-h-screen flex flex-col">
       <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/section-one">Software Team<span>i</span></Link>
            </li>
            <li className="relative group">
              <Link to="#" className="hover:text-blue-600">Services</Link>
<div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md">
<Link to="#" className="block p-2 hover:bg-gray-100">Sub Menu 1</Link>
<Link to="#" className="block p-2 hover:bg-gray-100">Sub Menu 2</Link>
</div>
            </li>

              <li>
              <Link to="/rwork">Technologies</Link>
            </li>
                <li>
              <Link to="/rwork">Resources</Link>
            </li>  

            <li>
              <Link to="/rwork">Company</Link>
            </li>
             <li className="p-2 rounded-md border-2 border-[#2DC67D] flex items-center justify-center relative">
              <Link to="/gg" className="">Get In Touch</Link>
              <span>  <GoArrowUpRight /></span>
            </li>
          </ul>
       
          <h1 className="logo">
            <Link to="/">
            <span className="block">
             <img src={logo} alt="logo" />
            </span> 
            </Link>
          </h1>
        </div>
      </nav> 
    
        <Outlet />
     
      </div>
    </>
  );
};

export default TopHeader;
