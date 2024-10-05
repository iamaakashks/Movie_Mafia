import React from "react";
import { Link } from "react-router-dom";

export default function SideNav(){
    return (
        <div className='w-[20%] fixed h-[100%] px-6 py-8 border-r-[1px] border-[#2c2e3a] flex flex-col gap-6'>
            <div className="title flex justify-between gap-[0.5vw] items-center">
                <div className="flex gap-2 md:tracking-tight items-center">
                    <i className="ri-tv-fill text-[#0a21c0] text-2xl"></i>
                    <h1 className="font-bold text-2xl bg-gradient-to-r from-[#0a21c0] to-[#b3b4bd] text-transparent bg-clip-text">Movie Mafia</h1>
                </div>
                <i className="text-2xl cursor-pointer ri-menu-line hidden"></i>
                <i className="text-2xl hover:bg-red-400 cursor-pointer ri-close-large-line"></i>
            </div>
            <div className="feed border-b-[1px] border-[#2c2e3a]">
                <h2 className="text-2xl font-medium tracking-tight">News Feed</h2>
                <nav className="text-lg ml-4">
                    <Link className="p-4 my-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] rounded-md flex gap-4"><i className="ri-fire-fill"></i>Trending</Link>
                    <Link className="p-4 my-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] rounded-md flex gap-4"><i className="ri-bard-fill"></i>Popular</Link>
                    <Link className="p-4 my-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] rounded-md flex gap-4"><i className="ri-movie-2-fill"></i>Movies</Link>
                    <Link className="p-4 my-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] rounded-md flex gap-4"><i className="ri-tv-2-fill"></i>TV Shows</Link>
                    <Link className="p-4 my-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] rounded-md flex gap-4"><i className="ri-user-search-fill"></i>People</Link>
                </nav>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium tracking-tight">Website Information</h2>
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg cursor-pointer"><i className="ri-information-fill mr-4"></i>About Movie Mafia</h4>
                    <h4 className="text-lg cursor-pointer"><i className="ri-phone-fill mr-4"></i>Contact Us</h4>
                </div>
            </div>
        </div>
    )
}