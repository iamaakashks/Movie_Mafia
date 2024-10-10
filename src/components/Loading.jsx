import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = () => (
    <div className="w-full bg-[#141619] h-screen flex justify-center items-center">
        <ReactLoading type="spin" color="#0a21c0" className="" />
    </div>
);
 
export default Loading;