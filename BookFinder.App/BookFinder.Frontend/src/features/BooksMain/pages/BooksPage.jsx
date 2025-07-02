import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/booksMainService";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import BooksList from "../components/BooksList";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [sortBy, setSortBy] = useState("author");

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
      setFilteredBooks(sortBooks(data, "author"));
    };
    loadBooks();
  }, []);

  const sortBooks = (booksArray, sortType) => {
    return [...booksArray].sort((a, b) => {
      const aValue = (a[sortType] || "").toString().toLowerCase();
      const bValue = (b[sortType] || "").toString().toLowerCase();
      return aValue.localeCompare(bValue);
    });
  };

  const handleSearch = () => {
    setSubmittedQuery(searchQuery);
    if (searchQuery === "") {
      setFilteredBooks(sortBooks(books, sortBy));
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(query);
      const authorMatch = book.author.toLowerCase().includes(query);
      const genreMatch = book.genre.toLowerCase().includes(query);
      const ratingMatch = book.rating
        ? book.rating.toString().includes(searchQuery)
        : false;
      return titleMatch || authorMatch || genreMatch || ratingMatch;
    });
    setFilteredBooks(sortBooks(filtered, sortBy));
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setFilteredBooks(sortBooks(filteredBooks, newSortBy));
  };

  return (
    <div className="min-h-screen bg-[#EEF2F6]">
      <div className="bg-white border-b-[0.1rem] border-[#23272A] p-[1rem]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center gap-[1rem]">
          <h1 className="text-[#23272A] font-semibold text-[1.5rem]">
            BooksFinder
          </h1>
          <div className="flex flex-col sm:flex-row gap-[1rem] md:ml-auto">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handleSearch}
            />
            <SortDropdown sortBy={sortBy} onSortChange={handleSortChange} />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto p-[1rem]">
        <BooksList books={filteredBooks} searchQuery={submittedQuery} />
      </div>
    </div>
  );
};

export default BooksPage;
