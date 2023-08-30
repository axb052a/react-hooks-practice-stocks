import React, { useState } from "react";

function SearchBar({ onSortChange, onFilterChange }) {
  const [selectedSort, setSelectedSort] = useState("none");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    setSelectedSort(sortType);
    onSortChange(sortType);
  };

  const handleFilterChange = (event) => {
    const filterType = event.target.value;
    setSelectedFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={selectedSort === "Alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={selectedSort === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
