import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import Header from "./partials/Header";
import axios from "../utils/axios.jsx";
import HorizaltalCards from "./partials/HorizaltalCards.jsx";

export default function Home() {
  document.title = "Movie Mafia | Homepage";
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("all");

  const getData = async () => {
    try {
      let { data } = await axios.get("/trending/all/week");
      const randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setData(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    !data && getData();
  }, [category]);
  return data ? (
    <>
      <SideNav />
      <div className="min-h-screen w-[80%] ml-[20%] bg-[#141619]">
        <TopNav />
        <Header data={data} />
        <HorizaltalCards />
      </div>
    </>
  ) : <div>Loading</div>
}
