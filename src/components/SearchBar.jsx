import React from "react";
import "../App.css";

const SearchBar = () => {
  return (
    <div className="search-container">

      <input
        className="search-input"
        type="text"
        placeholder="Search for hot deals . . ."
      />
      <span className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
