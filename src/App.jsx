import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from "./components/Trending";
import Popular from './components/Popular';
import Movies from './components/Movies';
import Tv from './components/Tv.jsx';
import People from "./components/People.jsx";
import Moviedetails from './components/Moviedetails.jsx';
import Tvdetails from './components/Tvdetails.jsx';
import Peopledetails from './components/Peopledetails.jsx';
export default function App(){
  return (
    <div className="text-[#B3B4BD] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending/" element={<Trending />} />
        <Route path="/popular/" element={<Popular />} />
        <Route path="/movies/" element={<Movies />}>
          <Route path="/movies/details/:id" element={<Moviedetails />} />
        </Route>
        <Route path="/tv/" element={<Tv />}>
          <Route path="/tv/details/:id" element={<Tvdetails />} />
        </Route>
        <Route path="/people/" element={<People />}>
          <Route path="/people/details/:id" element={<Peopledetails />} />
        </Route>
      </Routes>
    </div>
  )
}