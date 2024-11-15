import React from 'react'
import Navbar from './Navbar'
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Image6 from '../assets/image6.png';
import Icon from '../assets/Icon.png';
import twitter from '../assets/twiter.png';
import youtube from '../assets/youtube.png';
import game from '../assets/game.png';

const Dashboard = () => {
    return (
        <div className="flex flex-col flex-grow mx-auto" >
            <Navbar />

            <div className="bg-lime-300 p-4 md:p-6 lg:p-8 text-center rounded-3xl flex flex-col md:flex-row justify-between items-center text-black w-full md:w-[550px] lg:w-[550px] xl:w-[750px]  sxx:w-[1000px] lgx:w-[1500px] mdx:w-[900px] absolute top-1 lgx:top-3 left-8 md:left-32 lg:left-36 h-20 md:h-24 lg:h-24 lgx:h-32 z-20 mt-28 md:mt-32 lg:mt-40 mdx:mt-48 mdx:left-36 lgx:left-44">
                <p className="text-sm md:text-base lg:text-sm lgx:text-xl">
                    You haven't added any brokerages yet
                </p>
                <button className="bg-black text-lime-300 px-6 md:px-8 py-2 md:py-3 rounded-full border-none cursor-pointer w-full md:w-auto mt-4 md:mt-0 lg:w-auto mdx:w-56 ">
                    LINK BROKERAGE
                </button>
            </div>



            <div className='flex justify-between  ml-[155px] mdx:ml-[150px] lgx:ml-[180px] mt-[270px] lgx:mt-[320px] mdx:mt-[283px]'>
                <div className='grid grid-cols-3 bg-white mt-[50px]  gap-6 lgx:gap-8'>
                   
                    <div className="bg-black/80 p-0 rounded-2xl text-white w-[280px] h-[420px] sxx:w-[320px] sxx:h-[500px] lgx:w-[475px] lgx:h-[645px] relative">
                        <img src={Image1} alt="Trader 1" className="w-full h-full rounded-2xl mb-2" />
                        <div className="flex justify-between absolute top-[260px] w-full h-[159px] sxx:top-[350px] lgx:h-[194px] lgx:top-[450px] rounded-2xl backdrop-blur-md p-4">
                            <div className="flex flex-col relative top-2">
                                <span className="flex items-center text-sm">
                                    <img src={game} className="w-[25px] h-[15px] mr-2 relative top-1" />
                                    8.23K
                                </span>
                                <span className=" relative top-4 flex items-center mt-1 text-base lgx:text-lg">
                                    @janediso
                                    <img src={Icon} className="w-[15px] h-[15px] ml-1" />
                                </span>
                            </div>
                           <div>
                           <span className="text-xs mt-5  sxx:text-sm lgx:text-base ">Returns</span>
                            <button className="bg-[#d3ff5b] text-black text-xs mdx:w-[85px] lgx:w-[105px]  rounded-2xl px-2 py-1 lgx:px-4 lgx:py-2 mt-1  sxx:ml-1 mdx:ml-3">
                                3.32%
                            </button>
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-4  space-x-2">
                            <button className="bg-black/40 text-white opacity-60 rounded-full px-4 py-1 border border-wheat w-24 lgx:ml-10 mdx:w-28 sxx:w-32 lgx:w-44">
                                Follow
                            </button>
                            <button className="bg-black/40 text-[#d3ff5b] border-[#d3ff5b] rounded-full px-4 py-1 border w-24 mdx:w-28 sxx:w-32 lgx:w-44 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="bg-black/80 p-0 rounded-2xl text-white w-[280px] h-[420px] sxx:w-[320px] sxx:h-[500px] lgx:w-[475px] lgx:h-[645px] relative">
                        <img src={Image2} alt="Trader 1" className="w-full h-full rounded-2xl mb-2" />
                        <div className="flex justify-between absolute top-[260px] w-full h-[159px] sxx:top-[350px] lgx:h-[194px] lgx:top-[450px] rounded-2xl backdrop-blur-md p-4">
                            <div className="flex flex-col relative top-2">
                                <span className="flex items-center text-sm">
                                    <img src={game} className="w-[25px] h-[15px] mr-2 relative top-1" />
                                    8.23K
                                </span>
                                <span className=" relative top-4 flex items-center mt-1 text-base lgx:text-lg">
                                    @janediso
                                    <img src={Icon} className="w-[15px] h-[15px] ml-1" />
                                </span>
                            </div>
                           <div>
                           <span className="text-xs mt-5  sxx:text-sm lgx:text-base ">Returns</span>
                            <button className="bg-[#d3ff5b] text-black text-xs mdx:w-[85px] lgx:w-[105px]  rounded-2xl px-2 py-1 lgx:px-4 lgx:py-2 mt-1  sxx:ml-1 mdx:ml-3">
                                3.32%
                            </button>
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-4  space-x-2">
                            <button className="bg-black/40 text-white opacity-60 rounded-full px-4 py-1 border border-wheat w-24 lgx:ml-10 mdx:w-28 sxx:w-32 lgx:w-44">
                                Follow
                            </button>
                            <button className="bg-black/40 text-[#d3ff5b] border-[#d3ff5b] rounded-full px-4 py-1 border w-24 mdx:w-28 sxx:w-32 lgx:w-44 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="bg-black/80 p-0 rounded-2xl text-white w-[280px] h-[420px] sxx:w-[320px] sxx:h-[500px] lgx:w-[475px] lgx:h-[645px] relative">
                        <img src={Image3} alt="Trader 1" className="w-full h-full rounded-2xl mb-2" />
                        <div className="flex justify-between absolute top-[260px] w-full h-[159px] sxx:top-[350px] lgx:h-[194px] lgx:top-[450px] rounded-2xl backdrop-blur-md p-4">
                            <div className="flex flex-col relative top-2">
                                <span className="flex items-center text-sm">
                                    <img src={game} className="w-[25px] h-[15px] mr-2 relative top-1" />
                                    8.23K
                                </span>
                                <span className=" relative top-4 flex items-center mt-1 text-base lgx:text-lg">
                                    @janediso
                                    <img src={Icon} className="w-[15px] h-[15px] ml-1" />
                                </span>
                            </div>
                           <div>
                           <span className="text-xs mt-5  sxx:text-sm lgx:text-base ">Returns</span>
                            <button className="bg-[#d3ff5b] text-black text-xs mdx:w-[85px] lgx:w-[105px]  rounded-2xl px-2 py-1 lgx:px-4 lgx:py-2 mt-1  sxx:ml-1 mdx:ml-3">
                                3.32%
                            </button>
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-4  space-x-2">
                            <button className="bg-black/40 text-white opacity-60 rounded-full px-4 py-1 border border-wheat w-24 lgx:ml-10 mdx:w-28 sxx:w-32 lgx:w-44">
                                Follow
                            </button>
                            <button className="bg-black/40 text-[#d3ff5b] border-[#d3ff5b] rounded-full px-4 py-1 border w-24 mdx:w-28 sxx:w-32 lgx:w-44 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="bg-black/80 p-0 rounded-2xl text-white w-[280px] h-[420px] sxx:w-[320px] sxx:h-[500px] lgx:w-[475px] lgx:h-[645px] relative">
                        <img src={Image4} alt="Trader 1" className="w-full h-full rounded-2xl mb-2" />
                        <div className="flex justify-between absolute top-[260px] w-full h-[159px] sxx:top-[350px] lgx:h-[194px] lgx:top-[450px] rounded-2xl backdrop-blur-md p-4">
                            <div className="flex flex-col relative top-2">
                                <span className="flex items-center text-sm">
                                    <img src={game} className="w-[25px] h-[15px] mr-2 relative top-1" />
                                    8.23K
                                </span>
                                <span className=" relative top-4 flex items-center mt-1 text-base lgx:text-lg">
                                    @janediso
                                    <img src={Icon} className="w-[15px] h-[15px] ml-1" />
                                </span>
                            </div>
                           <div>
                           <span className="text-xs mt-5  sxx:text-sm lgx:text-base ">Returns</span>
                            <button className="bg-[#d3ff5b] text-black text-xs mdx:w-[85px] lgx:w-[105px]  rounded-2xl px-2 py-1 lgx:px-4 lgx:py-2 mt-1  sxx:ml-1 mdx:ml-3">
                                3.32%
                            </button>
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-4  space-x-2">
                            <button className="bg-black/40 text-white opacity-60 rounded-full px-4 py-1 border border-wheat w-24 lgx:ml-10 mdx:w-28 sxx:w-32 lgx:w-44">
                                Follow
                            </button>
                            <button className="bg-black/40 text-[#d3ff5b] border-[#d3ff5b] rounded-full px-4 py-1 border w-24 mdx:w-28 sxx:w-32 lgx:w-44 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="bg-black/80 p-0 rounded-2xl text-white w-[280px] h-[420px] sxx:w-[320px] sxx:h-[500px] lgx:w-[475px] lgx:h-[645px] relative">
                        <img src={Image5} alt="Trader 1" className="w-full h-full rounded-2xl mb-2" />
                        <div className="flex justify-between absolute top-[260px] w-full h-[159px] sxx:top-[350px] lgx:h-[194px] lgx:top-[450px] rounded-2xl backdrop-blur-md p-4">
                            <div className="flex flex-col relative top-2">
                                <span className="flex items-center text-sm">
                                    <img src={game} className="w-[25px] h-[15px] mr-2 relative top-1" />
                                    8.23K
                                </span>
                                <span className=" relative top-4 flex items-center mt-1 text-base lgx:text-lg">
                                    @janediso
                                    <img src={Icon} className="w-[15px] h-[15px] ml-1" />
                                </span>
                            </div>
                           <div>
                           <span className="text-xs mt-5  sxx:text-sm lgx:text-base ">Returns</span>
                            <button className="bg-[#d3ff5b] text-black text-xs mdx:w-[85px] lgx:w-[105px]  rounded-2xl px-2 py-1 lgx:px-4 lgx:py-2 mt-1  sxx:ml-1 mdx:ml-3">
                                3.32%
                            </button>
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-4  space-x-2">
                            <button className="bg-black/40 text-white opacity-60 rounded-full px-4 py-1 border border-wheat w-24 lgx:ml-10 mdx:w-28 sxx:w-32 lgx:w-44">
                                Follow
                            </button>
                            <button className="bg-black/40 text-[#d3ff5b] border-[#d3ff5b] rounded-full px-4 py-1 border w-24 mdx:w-28 sxx:w-32 lgx:w-44 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="bg-black/80 p-0 rounded-2xl text-white w-[280px] h-[420px] sxx:w-[320px] sxx:h-[500px] lgx:w-[475px] lgx:h-[645px] relative">
                        <img src={Image6} alt="Trader 1" className="w-full h-full rounded-2xl mb-2" />
                        <div className="flex justify-between absolute top-[260px] w-full h-[159px] sxx:top-[350px] lgx:h-[194px] lgx:top-[450px] rounded-2xl backdrop-blur-md p-4">
                            <div className="flex flex-col relative top-2">
                                <span className="flex items-center text-sm">
                                    <img src={game} className="w-[25px] h-[15px] mr-2 relative top-1" />
                                    8.23K
                                </span>
                                <span className=" relative top-4 flex items-center mt-1 text-base lgx:text-lg">
                                    @janediso
                                    <img src={Icon} className="w-[15px] h-[15px] ml-1" />
                                </span>
                            </div>
                           <div>
                           <span className="text-xs mt-5  sxx:text-sm lgx:text-base ">Returns</span>
                            <button className="bg-[#d3ff5b] text-black text-xs mdx:w-[85px] lgx:w-[105px]  rounded-2xl px-2 py-1 lgx:px-4 lgx:py-2 mt-1  sxx:ml-1 mdx:ml-3">
                                3.32%
                            </button>
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-4  space-x-2">
                            <button className="bg-black/40 text-white opacity-60 rounded-full px-4 py-1 border border-wheat w-24 lgx:ml-10 mdx:w-28 sxx:w-32 lgx:w-44">
                                Follow
                            </button>
                            <button className="bg-black/40 text-[#d3ff5b] border-[#d3ff5b] rounded-full px-4 py-1 border w-24 mdx:w-28 sxx:w-32 lgx:w-44 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other trader cards */}

                 <div className='relative left-72 sxx:left-80 mdx:left-[350px] lgx:left-[550px]'>
                 <button className="w-[200px] h-[50px] sxx:w-[275px] sxx:h-[75px] lgx:w-[350px] lgx:h-[90px] rounded-full text-sm font-medium bg-white mx-auto mt-8  border border-black">
                        LOAD MORE
                    </button>
                 </div>

                </div>
                <aside className="bg-white shadow-lg rounded-tl-3xl rounded-bl-3xl p-6 2xl:w-[480px] xl:w-[350px] lg:w-[300px] mdx:w-[420px] sxx:w-[700px] lgx:w-[750px] mt-0 z-40 mr-0 relative bottom-[137px]">
                    <h2 className="text-xl font-semibold mb-4">Today</h2>
                    <ul className="announcement-list space-y-12">
                        <li className="flex items-center">
                            <span className='noti-pic mr-2'>
                                <img src={Image1} alt="@jasondavidson" className="w-10 h-10 sxx:w-12 sxx:h-12 lgx:w-16 lgx:h-16 rounded-full" />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-700 sxx:text-lg lgx:text-2xl ">@jasondavidson made an announcement</span>
                                <span className="minute text-gray-500 sxx:text-lg  ">1 min ago</span>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <span className='noti-pic mr-2'>
                                <img src={Image2} alt="@alisondilaurentis" className="w-10 h-10 sxx:w-12 sxx:h-12 lgx:w-16 lgx:h-16 rounded-full" />
                            </span>
                            <span className="text-gray-700 sxx:text-lg lgx:text-2xl  ">@alisondilaurentis made an announcement <span className='minute text-gray-500 sxx:text-lg  '>1 hr ago</span></span>
                        </li>
                        <li className="relative flex items-center top-4">
                            <span className='noti-pic mr-2'>
                                <img src={Image6} alt="@lucyhale" className="w-10 h-10 sxx:w-12 sxx:h-12 lgx:w-16 lgx:h-16 rounded-full" />
                            </span>
                            <span className="text-gray-700 sxx:text-lg lgx:text-2xl  ">@lucyhale made an announcement <span className='minute text-gray-500 sxx:text-lg  '>2 hr ago</span></span>
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-4">Yesterday</h2>
                    <ul className="announcement-list space-y-12">
                        <li className="flex items-center">
                            <span className='noti-pic mr-2'>
                                <img src={Image3} alt="@jasondavidson" className="w-10 h-10 sxx:w-12 sxx:h-12 lgx:w-16 lgx:h-16 rounded-full" />
                            </span>
                            <span className="text-gray-700 sxx:text-lg lgx:text-2xl ">@jasondavidson made an announcement <span className='minute text-gray-500 sxx:text-lg '>1 min ago</span></span>
                        </li>
                        <li className="flex items-center">
                            <span className='noti-pic mr-2'>
                                <img src={Image4} alt="@alisondilaurentis" className="w-10 h-10 sxx:w-12 sxx:h-12 lgx:w-16 lgx:h-16 rounded-full" />
                            </span>
                            <span className="text-gray-700 sxx:text-lg lgx:text-2xl">@alisondilaurentis made an announcement <span className='minute text-gray-500 sxx:text-lg '>1 hr ago</span></span>
                        </li>
                        <li className="flex items-center">
                            <span className='noti-pic mr-2'>
                                <img src={Image5} alt="@lucyhale" className="w-10 h-10 sxx:w-12 sxx:h-12 lgx:w-16 lgx:h-16 rounded-full" />
                            </span>
                            <span className="text-gray-700 sxx:text-lg lgx:text-2xl">@lucyhale made an announcement <span className='minute text-gray-500 sxx:text-lg '>2 hr ago</span></span>
                        </li>
                    </ul>
                </aside>


            </div>
        </div>
    )
}

export default Dashboard
