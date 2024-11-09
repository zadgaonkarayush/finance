// import React from 'react'
// import { FaSearch, FaFilter, FaCopy } from 'react-icons/fa';
// import Icon from '../assets/icon.png';

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white flex flex-col items-center p-8 absolute top-0 left-24 right-0 w-[calc(100%-6rem)] h-52 z-10">
//             <div className="flex justify-between items-start w-full mr-20 h-20">
//                 <p className="ml-16 text-gray-400">
//                     Welcome to,<br />
//                     <h1 className="text-white mt-0 text-3xl font-medium">Parrot Finance</h1>
//                 </p>
//                 <div className="relative w-96 h-14 mb-20">
//                     <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-lg" />
//                     <input 
//                         type="search" 
//                         placeholder="Search..." 
//                         className="bg-gray-800 border-none py-2 pl-10 pr-4 rounded-full text-white w-full h-full" 
//                     />
//                 </div>
//             </div>
//             <div className="flex justify-between  items-center w-7/12 mb-20 relative top-1 right-60">
//                 <h3 className=" ml-4 font-medium text-xl">
//                     <span className="text-gray-400 text-xl">Featured</span>
//                     <img src={Icon} alt="Certified Traders" className="inline h-5 w-5" /> Traders
//                 </h3>
//                 <div className="flex gap-5 relative ">
//                     <FaSearch className="text-lg cursor-pointer font-light" />
//                     <FaFilter className="text-lg cursor-pointer font-light" />
//                     <FaCopy className="text-lg cursor-pointer font-light" />
//                 </div>
//             </div>
        
//     </nav>
//   )
// }

// export default Navbar

import React from 'react'
import { FaSearch, FaFilter, FaCopy } from 'react-icons/fa';
import Icon from '../assets/Icon.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white flex flex-col items-center p-6 lg:p-8 xl:p-10 absolute top-0 left-24 right-0 w-[calc(100%-6rem)] h-44 md:h-52 lg:h-56 z-10">
      <div className="flex flex-col md:flex-row justify-between items-start w-full mr-8 lg:mr-20 h-20">
        <div className="ml-8 md:ml-16 text-gray-400">
          <p>Welcome to,<br /></p>
          <h1 className="text-white mt-0 text-2xl md:text-3xl lg:text-4xl font-medium">Parrot Finance</h1>
        </div>
        <div className="relative w-full md:w-72 lg:w-96 sxx:w-[580px] lgx:w-[680px] lgx:right-24 h-12 md:h-14 mb-4 md:mb-20 mt-4 md:mt-0">
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-lg" />
          <input 
            type="search" 
            placeholder="Search..." 
            className="bg-gray-800 border-none py-2 pl-10 pr-4 rounded-full text-white w-full h-full"
          />
        </div>
      </div>

      <div className="flex justify-between items-center w-full md:w-7/12 lg:w-7/12 xl:w-7/12 sxx:w-7/12  mb-4 md:mb-20 relative top-1 px-11 right-0 md:right-20 lg:right-40 xl:right-64 sxx:right-96 lgx:right-[495px]">
        <h3 className="ml-4 md:ml-0 font-medium text-lg md:text-xl">
          <span className="text-gray-400">Featured</span>
          <img src={Icon} alt="Certified Traders" className="inline h-4 w-4 md:h-5 md:w-5 ml-1" /> Traders
        </h3>
        <div className="flex gap-3 md:gap-5 relative">
          <FaSearch className="text-md md:text-lg cursor-pointer font-light" />
          <FaFilter className="text-md md:text-lg cursor-pointer font-light" />
          <FaCopy className="text-md md:text-lg cursor-pointer font-light" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
