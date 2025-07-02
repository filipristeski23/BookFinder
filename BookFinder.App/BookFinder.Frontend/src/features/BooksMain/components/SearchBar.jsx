import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex gap-[0.5rem]">
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full sm:w-[300px] h-[2.5rem] pl-[1rem] pr-[1rem] text-[#23272A] text-[0.9rem] font-medium bg-[#EEF2F6] rounded-[0.5rem] outline-none"
      />
      <button
        onClick={onSearch}
        className="px-[1.5rem] py-[0.5rem] bg-[#23272A] text-white rounded-[0.5rem] text-[0.9rem] font-medium cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
