import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import axios from "../../utils/axios.jsx";

const HorizaltalCards = () => {
  const options = ["all", "movie", "tv"];
  const [trendingData, setTrendingData] = useState([]);
  const [category, setCategory] = useState("all");
  const categoryFilter = (e) =>{
    setCategory(e.target.value);
  }

  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrendingData(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getTrendingData();
  });
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-16 h-[8vh]">
        <h1 className="text-2xl">Trending</h1>
        <select
          defaultValue="all"
          className="w-60 py-1.5 outline-none px-1 bg-[#2c2e3a]"
          onChange={categoryFilter}
        >
          <option value="0" disabled>
            Filter
          </option>
          {options.map((opt, index) => {
            return (
              <option value={opt} key={index}>
                {opt.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
      <div className="my-4 flex gap-8 overflow-x-auto items-center justify-start px-8">
        {trendingData.map((d, index) => {
          return <Card key={index} data={d} />;
        })}
      </div>
    </div>
  );
};

export default HorizaltalCards;