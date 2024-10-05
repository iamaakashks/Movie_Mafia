import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
export default function App(){
  return (
    <div className="w-full h-screen bg-[#141619] text-[#B3B4BD] flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}