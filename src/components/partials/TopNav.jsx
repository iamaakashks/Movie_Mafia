import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
    const [query, setQuery] = useState("");
    console.log(query);

    return (
        <div className="w-full border-b-[1px] border-[#2c2e3a] h-[10vh] flex items-center justify-center relative">
                <div className="w-2/5 flex items-center relative">
                    <input onChange={(e) => setQuery(e.target.value)} value={query} className="w-full outline-none bg-transparent rounded-l-full font-semibold text-xl px-4 py-2 border-[1px] border-[#2c2e3a]" type="text" placeholder="Search Your Movie" />
                    {query.length > 0 && <i onClick={() => setQuery("")} className="cursor-pointer ri-close-large-line text-xl font-semibold absolute right-2"></i>}
                </div>
                <i className="font-semibold text-xl border-[1px] border-[#2c2e3a] py-2 px-4 ml-[-1px] rounded-r-full ri-search-line"></i>
                <div className="bg-[#b3b4bd] w-2/5 max-h-96 absolute top-[80%] overflow-auto">
                    <Link to="/" className="text-[#141619] flex gap-4 items-center hover:bg-[#525256] duration-200 p-4">
                        <img className="w-16 h-16 object-cover" src="https://wp.missmalini.com/wp-content/uploads/2015/07/salm-6.jpg" alt="" />
                        <h4 className="font-bold text-lg">Bajrangi Bhaijaan</h4>
                    </Link>
                </div>
        </div>
    )
};

export default TopNav;