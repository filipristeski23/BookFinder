import React, { useState } from "react";

const SortDropdown = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: "author", label: "Author" },
    { value: "title", label: "Title" },
    { value: "genre", label: "Genre" },
  ];

  const handleOptionClick = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const currentLabel = sortOptions.find(
    (option) => option.value === sortBy
  )?.label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-[150px] h-[2.5rem] px-[1rem] text-[#23272A] text-[0.9rem] font-medium bg-[#EEF2F6] rounded-[0.5rem] outline-none flex items-center justify-center cursor-pointer"
      >
        <span>Sort by {currentLabel}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-[0.25rem] bg-[#EEF2F6]  border-[0.1rem] border-[#23272A] rounded-[0.5rem] z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`w-full px-[1rem] py-[0.75rem] text-left text-[0.9rem] font-medium hover:bg-[#23272A] hover:text-[#EEF2F6] first:rounded-t-[0.5rem] last:rounded-b-[0.5rem] ${
                sortBy === option.value
                  ? "bg-[#23272A] text-white"
                  : "text-[#23272A]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
