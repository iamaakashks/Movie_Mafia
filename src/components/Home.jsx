import React from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
export default function Home(){
    document.title = "Movie Mafia | Homepage";
    return (
        <>
            <SideNav />
            <div className="h-screen w-[80%] ml-[20%]">
                <TopNav />
            </div>
        </>
    )
}