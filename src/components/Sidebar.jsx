import React from "react";
import { FaMoon, FaPowerOff, FaHome, FaUser, FaCog, FaShareAlt, FaHeadphones, FaInfoCircle, FaUpload, FaDashcube } from "react-icons/fa";
import Logo from '../assets/Logo.png';
import Influ from '../assets/image.png';

function Sidebar() {
    return (
        <div className="absolute top-0 left-0 h-auto w-24 mdx:w-24 lgx:w-32 bg-gray-950 text-white flex flex-col p-4 space-y-4 border-r-2 border-gray-700">

            {/* Logo Section */}


            <div className="relative top-3">
                <img src={Logo} className="w-10 h-10 ml-[15px] mt-3 lgx:ml-[25px]" />


                {/* Profile Section */}
                <div className="border-b-2 border-t-2 border-gray-800 pb-4 right-[2px] relative top-10  ">
                    <div className=" p-4 flex flex-col items-center mt-7">
                        <div className="w-10 h-10 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden border-2 border-gray-300  mb-12   "><img src={Influ} /></div>
                        <div className="flex items-center space-x-2">
                            <FaUpload />
                        </div>
                    </div>
                </div>


                {/* <div className=" top-12 right-3 relative  p-8 border-b border-gray-900 w-20 pb-4">
                    <div className="flex items-center space-x-2">
                        <FaHome className="w-6 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaDashcube className="w-5 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaUser className="w-5 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaCog className="w-5 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 pt-5">
                        <FaShareAlt className="w-5 h-5 mb-6" />
                    </div>
                </div> */}
                 <div className="flex items-center space-x-2 ml-5 lgx:ml-[32px] mt-24">
                        <FaHome className="w-6 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 ml-5 lgx:ml-[32px] pt-5">
                        <FaDashcube className="w-5 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 ml-5 lgx:ml-[32px] pt-5">
                        <FaUser className="w-5 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 ml-5 lgx:ml-[32px] pt-5">
                        <FaCog className="w-5 h-5 mb-6" />
                    </div>
                    <div className="flex items-center space-x-2 ml-5 lgx:ml-[32px] pt-5">
                        <FaShareAlt className="w-5 h-5 mb-6" />
                    </div>



                {/* Icon Section */}

                <div className="relative right-2 lgx:right-[0px] top-8  p-7  space-y-2 w-20 ">
                    <div className=" flex items-center lgx:ml-[2px] space-x-2  pb-4  ">
                        <FaMoon className="w-5 h-5  items-center" />
                    </div>
                    <div className="flex items-center space-x-2 pt-3">
                        <FaPowerOff className="w-5 h-5" />
                    </div>
                </div>

                {/* Detail and Headphone Section */}
                {/* <div className="mt-4  p-8 bg-gray-950  space-y-2 w-24 relative right-7 h-auto flex-initial ">
                    <div className="flex items-center space-x-2 pb-4 ml-2">
                        <FaHeadphones className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-2 pt-4 ml-2">
                        <FaInfoCircle className="w-5 h-5" />
                    </div>
                </div> */}
                 <div className="flex items-center space-x-2 pb-4 ml-5 lgx:ml-[28px] mt-16">
                        <FaHeadphones className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-2 pt-4 ml-5 lgx:ml-[28px] mb-4">
                        <FaInfoCircle className="w-5 h-5" />
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;

