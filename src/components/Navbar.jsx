import React from 'react'
import { FaSearch, FaFilter, FaCopy } from 'react-icons/fa';
import Icon from '../assets/Icon.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white flex flex-col items-center p-6 lg:p-8 xl:p-10 mdx:p-8 absolute top-0 left-24 right-0 w-[calc(100%-6rem)] h-44 mdx:h-60 md:h-52 lg:h-56 lgx:h-64 z-10">
      <div className='relative top-3 lgx:top-4'>
        <div className="flex flex-col md:flex-row justify-between items-start w-full mdx:w-screen mr-8 mdx:mr-20 lg:mr-20 h-20 mdx:mb-4 mdx:mt-0 ">
          <div className="ml-8 md:ml-40 mdx:ml-[160px] text-gray-400">
            <p>Welcome to,<br /></p>
            <h1 className="text-white mt-0 text-2xl md:text-3xl lg:text-4xl mdx:text-2xl lgx:text-4xl font-medium">Parrot Finance</h1>
          </div>
          <div className="relative w-full md:w-72 lg:w-96 sxx:w-[580px] lgx:w-[674px] mdx:right-[48px] mdx:h-[52px] lgx:right-24 h-11 md:h-14 mb-4 md:mb-20 mt-4 md:mt-0">
            <FaSearch className="absolute  top-1/2 left-4 transform -translate-y-1/2 text-white text-lg" />
            <input
              type="search"
              placeholder="Search..."
              className="bg-gray-800 border-none py-2 pl-10 pr-4 rounded-full text-white w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-full md:w-7/12 lg:w-7/12 xl:w-7/12 sxx:w-7/12 mdx:w-7/12   mb-4   md:mb-20 relative
     top-1 px-11 right-0 md:right-20 lg:right-40 mdx:ml-[350px] xl:right-64 sxx:right-96 lgx:right-[215px] ">
          <h3 className="ml-4 mdx:ml-6 md:ml-0 font-medium text-lg md:text-xl mdx:text-lg">
            <span className="text-gray-400">Featured</span>
            <img src={Icon} alt="Certified Traders" className="inline h-4 w-4 md:h-5 md:w-5 ml-1" /> Traders
          </h3>
          <div className=" lgx:gap-8 flex gap-3 md:gap-5 relative lgx:left-8  left-10">
            <FaSearch className="text-md md:text-lg lgx:text-xl cursor-pointer font-light" />
            <FaFilter className="text-md md:text-lg lgx:text-xl cursor-pointer font-light" />
            <FaCopy className="text-md md:text-lg lgx:text-xl cursor-pointer font-light" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
