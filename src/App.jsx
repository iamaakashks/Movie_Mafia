import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideNav from './components/template/SideNav';
export default function App(){
  return (
    <div className="w-full h-screen bg-[#141619] text-[#B3B4BD]">
      <SideNav />
    </div>
  )
}