import React from "react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav,setNav]= useState(false)
  const [logo,setLogo]=useState(false)
  const handleNav= ()=>{
    setNav(!nav);
    setlogo(!logo) 
  }
  return (
    <div className="flex  w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1>Beaches</h1>
      </div>
      <ul className="hidden md:flex cursor-pointer">
        <li>Home</li>
        <li>Destination</li>
        <li>View</li>
        <li>Bookings</li>
        <li>view </li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson size={20} />
        <BiSearch size={20} />
      </div>
      {/* hamburger menu */}
      <div  onClick= {handleNav} className="md:hidden z-10">
         {nav? <AiOutlineClose className="text-black " size={20}/>:<HiOutlineMenuAlt4 size={20} />}
      </div>
      {/* mobile menu drop downh */}
      <div onClick={handleNav} className={nav?"absolute left-0 text-black top-0 w-full bg-gray-100/90 px-4 py-7 flex  flex-col":"absolute left-[-100%]"}>
        <ul>
          <h1>Beaches</h1>
          <li className="border-b" >Home</li>
          <li className="border-b" >Destination</li>
          <li  className="border-b">View</li>
          <li  className="border-b">Bookings</li>
          <li  className="border-b" >view </li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6" >search</button>
          <button>Account</button>
        </div>

        <div className="flex justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};    

export default Navbar;
