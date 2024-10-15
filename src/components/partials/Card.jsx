import React, { useState } from "react";

const Card = ({data, rating}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-52 flex-shrink-0 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="rounded-lg hover:opacity-20 h-full w-full object-cover duration-300"
        src={`https://image.tmdb.org/t/p/original/` + (data.poster_path || data.backdrop_path || data.profile_path)}
        alt=""
      />
      <h4 className={`absolute bottom-12 px-2 leading-none text-center w-full font-black text-2xl ${isHovered ? "block" : "hidden"}`}>{data.title || data.original_title || data.name || data.original_name}</h4>
      {rating && <div className="absolute bottom-[8%] right-0 w-12 h-12 bg-[#0a21c0] rounded-full flex justify-center items-center">{Math.floor(data.vote_average*10)}%</div>}
    </div>
  );
};

export default Card;