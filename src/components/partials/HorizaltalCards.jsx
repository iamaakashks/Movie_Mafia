import React from "react";
import Card from "./Card.jsx";
const HorizaltalCards = () => {
  return (
    <div className="h-[45vh] w-full bg-zinc-800">
        <div className="flex justify-between px-16 pt-4 h-[8vh]">
            <h1 className="text-2xl">Trending</h1>
            <select className="w-52 py-1.5 outline-none px-1 bg-[#141619]">
                <option value="Filter">Filter</option>
                <option value="All">All</option>
                <option value="Movies">Movies</option>
                <option value="TV Shows">TV Shows</option>
            </select>
        </div>
        <div className="w-full overflow-x-auto h-[37vh] bg-black flex gap-8 items-center justify-start pl-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  );
};

export default HorizaltalCards;