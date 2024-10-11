import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Card from "./partials/Card";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Trending() {
  const navigateBack = useNavigate();
  const options = ["popular", "upcoming", "top rated", "Now in Cinema"];
  const [movieData, setMovieData] = useState([]);
  const [category, setCategory] = useState("tv");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  document.title = "Movie Mafia | Movies | " + category.toUpperCase();

  const filterSearchedItems = (e)=>{
    setSearchTerm(e.target.value);
  };

  const categoryFilter = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setMovieData([]);
    setHasMore(true);
  };

  const getMovieData = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if(data.results.length>0){
        
        setMovieData((prevState) => [...prevState, ...data.results]);
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
    getMovieData();
  }, [category]);

  const filteredData = searchTerm ? movieData.filter((item) => (item.title || item.name || item.original_name || item.original_title).toLowerCase().includes(searchTerm.toLowerCase())) : movieData;
  return movieData.length>0 ? (
    <div className="w-full min-h-screen bg-[#141619] text-[#b3b4bd]">
      <div className="h-[12vh] border-b-[1px] border-[#2c2e3a] flex items-center justify-between w-full px-16">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigateBack(-1)}
            className="hover:text-[#0a21c0] cursor-pointer ri-arrow-left-line font-bold text-2xl"
          ></i>
          <h4 className="font-bold text-2xl">Movies</h4>
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
        </div>
      </div>
      <InfiniteScroll className="flex flex-wrap gap-6 py-4 px-20" dataLength={movieData.length} hasMore={hasMore} next={getMovieData}>
          {filteredData.map((d, i) => {
                return <Card data={d} key={i} />
          })}
      </InfiniteScroll>
    </div>
  ) : <Loading />
}
