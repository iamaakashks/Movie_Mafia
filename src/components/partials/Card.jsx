import React, { useState } from "react";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-52 h-[252px] flex-shrink-0 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="rounded-lg h-full object-cover hover:opacity-20 duration-300"
        src="https://images.indianexpress.com/2023/12/Salman-Khan-old-days-1600.jpg"
        alt=""
      />
      <h4 className={`absolute top-[60%] ml-4 ${isHovered ? "block" : "hidden"}`}>Salman Khan Movies</h4>
    </div>
  );
};

export default Card;
