import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Card from "./partials/Card";
import { useNavigate } from "react-router-dom";

export default function Trending() {
    const navigateBack = useNavigate()
  const options = ["all", "movie", "tv"];
  const options2 = ["week", "day"];
  const [trendingData, setTrendingData] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const categoryFilter = (e) => {
    setCategory(e.target.value);
  };
  const durationFilter = (e) => {
    setDuration(e.target.value);
  };

  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrendingData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingData();
  });
  return (
    <div className="w-full min-h-screen bg-[#141619] text-[#b3b4bd]">
      <div className="h-[12vh] border-b-[1px] border-[#2c2e3a] flex items-center justify-between w-full px-16">
        <div className="flex items-center gap-4">
          <i onClick={() =>navigateBack(-1)} className="hover:text-[#0a21c0] cursor-pointer ri-arrow-left-line font-bold text-2xl"></i>
          <h4 className="font-bold text-2xl">Trending</h4>
        </div>
        <TopNav />
        <div className="flex gap-4">
          <select
            defaultValue="all"
            className="w-60 py-1.5 rounded-sm outline-none px-1 bg-[#2c2e3a]"
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
          <select
            defaultValue="week"
            className="w-60 py-1.5 rounded-sm outline-none px-1 bg-[#2c2e3a]"
            onChange={durationFilter}
          >
            <option value="0" disabled>
              Filter
            </option>
            {options2.map((opt, index) => {
              return (
                <option value={opt} key={index}>
                  {opt.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="min-h-[88vh] flex flex-wrap gap-6 py-4 px-20">
        {
            trendingData.map((d, i)=>{
                return <Card key={i} data={d} />
            })
        }
      </div>
    </div>
  );
}
