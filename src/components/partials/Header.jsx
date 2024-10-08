import React from "react";
import { Link } from "react-router-dom";
const Header = ({data}) => {
  return data ? (
    <div className="w-full h-[50vh] relative">
        <img className="bg-gradient w-full h-full object-cover object-top" src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
        <div className="absolute top-0 py-16 px-20 h-[full] w-full">
            <div className="h-full w-full">
                <h1 className="text-6xl tracking-tight font-bold">{data.name || data.title}</h1>
                <p className="my-4 w-[70%] leading-tight">{data.overview.slice(0, 200)}...<Link to="/" className="underline text-[#0a21c0]">more</Link></p>
                <h4 className="font-semibold">Realease Date: {!data.release_date? "Unknown" : data.release_date}</h4>
                <button type="button" className="px-5 mt-4 text-xl font-medium py-2 bg-[#0a21c0] rounded-lg">Trailer</button>
            </div>
        </div>
    </div>
  ) : <div>Loading</div>
};

export default Header;
