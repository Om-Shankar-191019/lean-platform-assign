import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/errorImg.png";
import { AiOutlinePlus } from "react-icons/ai";

const Error = () => {
  return (
    <div className=" bg-[#f3f3fb] h-screen w-full flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-gray-600">
          Oh!...Something went wrong
        </p>
        <span className="text-sm my-4 text-gray-400">
          Currently there is no match for you
        </span>
        <div>
          <img className="h-64" src={errorImage} alt="" />
        </div>
        <Link to="/help">
          <button className="flex items-center px-4 bg-blue-700 py-2 rounded-md hover:bg-blue-600 duration-300">
            <AiOutlinePlus className="font-bold text-white" size={24} />
            <span className="ml-2 text-white font-medium">Get Help</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
