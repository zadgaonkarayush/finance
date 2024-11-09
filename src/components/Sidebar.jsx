import React from "react";
import { FaMoon, FaPowerOff, FaHome, FaUser, FaCog, FaShareAlt, FaHeadphones, FaInfoCircle, FaUpload } from "react-icons/fa";
import Logo from '../assets/Logo.png';
import Influ from '../assets/image.png';

function Sidebar() {
    return (
        <div className="absolute top-0 left-0 h-auto w-28 lgx:w-32 bg-gray-950 text-white flex flex-col p-4 space-y-4 border-r-2 border-gray-700">

            {/* Logo Section */}
            <div className="border-b-2 border-gray-800 pb-4">
                <div className=" p-6 items-center ">
                    <img src={Logo} className="w-10 h-9" />
                </div>
            </div>

            {/* Profile Section */}
            <div className="border-b-2 border-gray-800 pb-4  ">
                <div className=" p-4 flex flex-col items-center mt-7">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300  mb-4  "><img src={Influ} /></div>
                    <div className="flex items-center space-x-2">
                        <FaUpload />
                    </div>
                </div>
            </div>

          
             <div className="mt-4  p-8 border-b border-gray-900 w-24 pb-4">
             <div className="flex items-center space-x-2">
                        <FaHome className="w-6 h-5 mb-4" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaUser className="w-5 h-5 mb-4" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaCog className="w-5 h-5 mb-4" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaShareAlt className="w-5 h-5 mb-4" />
                    </div>
            </div>
           
              

            {/* Icon Section */}
            
             <div className="mt-4  p-8  space-y-2 w-24 ">
                <div className="flex items-center space-x-2  pb-4 ">
                    <FaMoon className="w-5 h-5 items-center" />
                </div>
                <div className="flex items-center space-x-2 pt-3">
                    <FaPowerOff className="w-5 h-5" />
                </div>
            </div>

            {/* Detail and Headphone Section */}
            <div className="mt-4  p-8 bg-gray-950  space-y-2 w-24 relative right-3 h-auto flex-initial ">
                <div className="flex items-center space-x-2 pb-4 ml-2">
                    <FaHeadphones className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-2 pt-4 ml-2">
                    <FaInfoCircle className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
