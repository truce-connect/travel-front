import React from "react";
import beach from "../assets/Beach.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-screen object-cover"
        src={beach}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-90/30 ">
        <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 ">
          <h1>First Class Travel</h1>
          <h2 className="py-4">top 1% worldwide location</h2>

        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90" style={{color:'#ffffff'}}> 
            <div>
              <input
                className="bg-transparent  w-[300px] sm:w-[400px] font[poppins] focus:outline-none"
                type="text"
                placeholder="Search destination"
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch size={20} className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
