import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from "./components/Trending";
import Popular from './components/Popular';
import Movies from './components/Movies';
export default function App(){
  return (
    <div className="text-[#B3B4BD] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending/" element={<Trending />} />
        <Route path="/popular/" element={<Popular />} />
        <Route path="/movies/" element={<Movies />} />
      </Routes>
    </div>
  )
}