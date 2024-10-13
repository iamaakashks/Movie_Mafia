import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Card from "./partials/Card";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Trending() {
  const navigateBack = useNavigate();
  const options = ["all", "movie", "tv"];
  const options2 = ["day", "week"];
  const [trendingData, setTrendingData] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  document.title = "Movie Mafia | Trending | " + category.toUpperCase();

  const filterSearchedItems = (e)=>{
    setSearchTerm(e.target.value);
  };

  const categoryFilter = (e) => {
    setCategory(() => e.target.value);
    setPage(1);
    setTrendingData([]);
    setHasMore(true);
  };
  const durationFilter = (e) => {
    setDuration(e.target.value);
    setPage(1);
    setTrendingData([]);
    setHasMore(true);
  };

  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length>0){
        
        setTrendingData((prevState) => [...prevState, ...data.results]);
        setPage(prevPage => prevPage+1);
      }else{
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  };

  

  useEffect(() => {
    getTrendingData();
  }, [category, duration]);

  const filteredData = searchTerm ? trendingData.filter((item, index) => (item.title || item.name || item.original_name || item.original_title).toLowerCase().includes(searchTerm.toLowerCase())) : trendingData;
  return trendingData.length>0 ? (
    <div className="w-full min-h-screen bg-[#141619] text-[#b3b4bd]">
      <div className="h-[12vh] border-b-[1px] border-[#2c2e3a] flex items-center justify-between w-full px-16">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigateBack(-1)}
            className="hover:text-[#0a21c0] cursor-pointer ri-arrow-left-line font-bold text-2xl"
          ></i>
          <h4 className="font-bold text-2xl">Trending</h4>
        </div>
        <div className="w-[50%] flex justify-center">
          <input onChange={filterSearchedItems} type="text" className="bg-transparent border-[1px] w-[80%] border-[#2c2e3a] rounded-full text-lg py-1.5 px-4 outline-none font-medium" placeholder="Search Movie" />
        </div>
        <div className="flex gap-4">
          <select
            defaultValue="filter"
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
            defaultValue="Filter"
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
      <InfiniteScroll className="flex flex-wrap gap-6 py-4 px-20" dataLength={trendingData.length} hasMore={hasMore} next={getTrendingData}>
          {filteredData.map((d, i) => {
                return <Card data={d} key={i} rating={true}/>
          })}
      </InfiniteScroll>
    </div>
  ) : <Loading />
}
