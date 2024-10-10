import React, { useState } from "react";

const Card = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-52 flex-shrink-0 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="rounded-lg hover:opacity-20 h-full w-full object-cover duration-300"
        src={`https://image.tmdb.org/t/p/original/` + data.poster_path}
        alt=""
      />
      <h4 className={`absolute bottom-10 px-2 leading-none text-center w-full font-black text-2xl ${isHovered ? "block" : "hidden"}`}>{data.title || data.original_title || data.name || data.original_name}</h4>
    </div>
  );
};

export default Card;