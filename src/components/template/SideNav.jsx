import React from "react";

export default function SideNav(){
    document.title = "Movie Mafia | Homepage";
    return (
        <div className='lg:w-[20%] h-[100%] px-6 pt-8 border-r-[1px] border-[#2c2e3a] flex flex-col gap-8'>
            <div className="title flex items-center gap-4 ">
                <i className="ri-tv-fill text-yellow-300 text-2xl"></i>
                <h1 className="font-bold text-3xl">Movie Mafia</h1>
            </div>
            <div className="feed flex flex-col gap-4 h-[60vh] border-b-[1px] border-[#2c2e3a]">
                <h2 className="text-2xl tracking-tight">New Feeds</h2>
                <ul className="text-xl ml-4 flex flex-col gap-4">
                    <li className="border-[1px] p-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] hover:border-none rounded-md flex gap-4 border-[#2c2e3a]"><i className="ri-fire-fill"></i>Trending</li>
                    <li className="border-[1px] p-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] hover:border-none rounded-md flex gap-4 border-[#2c2e3a]"><i className="ri-bard-fill"></i>Popular</li>
                    <li className="border-[1px] p-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] hover:border-none rounded-md flex gap-4 border-[#2c2e3a]"><i className="ri-movie-2-fill"></i>Movies</li>
                    <li className="border-[1px] p-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] hover:border-none rounded-md flex gap-4 border-[#2c2e3a]"><i className="ri-tv-2-fill"></i>TV Shows</li>
                    <li className="border-[1px] p-4 hover:bg-gradient-to-r from-[#0a21c0] via-[#050a44] hover:border-none rounded-md flex gap-4 border-[#2c2e3a]"><i className="ri-user-search-fill"></i>People</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl tracking-tight">Website Information</h2>
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg"><i className="ri-information-fill mr-4"></i>About Movie Mafia</h4>
                    <h4 className="text-lg"><i className="ri-phone-fill mr-4"></i>Contact Us</h4>
                </div>
            </div>
        </div>
    )
}