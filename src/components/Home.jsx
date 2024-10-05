import React from "react";
import SideNav from "./partials/SideNav";
export default function Home(){
    document.title = "Movie Mafia | Homepage";
    return (
        <>
            <SideNav />
            <div className="h-screen w-[80%]"></div>
        </>
    )
}