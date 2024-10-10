import React from 'react';
import { Input } from '../ui/input';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="w-full px-0 mb-4 sm:w-3/4 sm:px-0">
      <h3 className="mb-2 text-lg font-bold">Search News</h3>
      <Input
        type="text"
        placeholder="Search News..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
