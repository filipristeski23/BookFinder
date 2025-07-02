import React from "react";

const BooksList = ({ books, searchQuery }) => {
  const highlightText = (text, query) => {
    if (!query) return text;

    const lowerQuery = query.toLowerCase();
    const lowerText = text.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);

    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);

    return (
      <>
        {before}
        <span key="highlight" className="font-bold text-red-500">
          {match}
        </span>
        {after}
      </>
    );
  };

  if (books.length === 0) {
    return (
      <div className="text-center py-[2rem]">
        <p className="text-[#23272A] text-[1.1rem] font-medium">
          No results found
        </p>
      </div>
    );
  }

  return (
    <div className="books-list">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
        {books.map((book) => (
          <div
            key={book.id}
            className="books-list__item bg-white p-[1.5rem] rounded-[1rem] border-[0.1rem] border-[#23272A]"
          >
            <h3 className="books-list__title text-[#23272A] font-semibold text-[1.1rem] mb-[0.5rem]">
              {highlightText(book.title, searchQuery)}
            </h3>

            <p className="books-list__author text-[#23272A] text-[0.95rem] mb-[0.5rem]">
              <span className="font-medium">Author: </span>
              {highlightText(book.author, searchQuery)}
            </p>

            <p className="books-list__genre text-[#23272A] text-[0.95rem] mb-[0.5rem]">
              <span className="font-medium">Genre: </span>
              {highlightText(book.genre, searchQuery)}
            </p>

            {book.rating && (
              <div className="books-list__rating flex items-center">
                <span className="text-[#23272A] font-medium text-[0.95rem] mr-[0.5rem]">
                  Rating:
                </span>
                <span className="bg-[#23272A] text-white px-[0.5rem] py-[0.25rem] rounded-[0.5rem] text-[0.85rem] font-medium">
                  {highlightText(book.rating.toString(), searchQuery)}/10
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
