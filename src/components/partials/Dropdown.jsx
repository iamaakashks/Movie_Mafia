import React, { useEffect, useState } from "react";

const Dropdown = ({ options, categoryFilter }) => {
  return (
    <select
      defaultValue="all"
      className="w-60 py-1.5 outline-none px-1 bg-[#2c2e3a]"
      onChange={categoryFilter}
    >
      <option value="0" disabled>
        Filter
      </option>
      {options.map((o, i) => {
        return (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
