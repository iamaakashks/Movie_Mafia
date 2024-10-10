import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);

  const getSearchList = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearchList(data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    getSearchList();
  }, [query]);

  return (
    <div className="z-10 border-b-[1px] border-[#2c2e3a] h-[10vh] bg-transparent flex items-center justify-center relative">
      <div className="w-2/5 flex items-center relative">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-full outline-none bg-transparent rounded-l-full text-lg px-4 py-2 border-[1px] border-[#2c2e3a]"
          type="text"
          placeholder="Search Your Movie"
        />
        {query.length != 0 && (
          <i
            onClick={() => setQuery("")}
            className="cursor-pointer ri-close-large-line text-xl font-semibold absolute right-2"
          ></i>
        )}
      </div>
      <i className="font-semibold text-xl border-[1px] border-[#2c2e3a] py-2 px-4 ml-[-1px] rounded-r-full ri-search-line"></i>
      <div className="bg-[#141619] border-[1px] border-t-0 border-[#2c2e3a] w-2/5 max-h-96 absolute top-[82%] overflow-auto">
        {searchList.map((s, index) => {
          return (
            <Link
              key={index}
              to="/"
              className="text-[#b3b4bd] flex gap-4 items-center hover:bg-[#2c2e3a] line-clamp-4 duration-200 p-4"
            >
              <img
                className="w-16 h-16 rounded-md object-cover"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : `../../../public/noImage.jpg`
                }
                alt=""
              />
              <h4 className="font-bold text-lg leading-tight">
                {s.title || s.name}
              </h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopNav;
