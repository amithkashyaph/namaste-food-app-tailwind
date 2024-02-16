import React, { useState } from "react";

export const Search = ({ searchClickHandler }) => {
  const [searchText, setSearchtext] = useState("");
  return (
    <div className="p-4  w-1/3">
      <input
        type="text"
        data-testid="searchInput"
        className="w-3/4 p-2 border border-solid border-black rounded-md"
        placeholder="Enter restuarant name for search"
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
      />
      <button
        className="bg-green-100 px-4 py-2 ml-2 rounded-xl"
        onClick={() => {
          searchClickHandler(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
};
