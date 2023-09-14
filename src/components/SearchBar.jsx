import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף לוגיקה נוספת לחיפוש, כמו לשלב את searchTerm בשאילתת החיפוש או לעשות משהו אחר
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="relative flex items-center border-b-2 border-gray-100 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 outline-none focus:ring focus:ring-blue-600 rounded-full bg-transparent"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-2 p-2 text-blue-200 hover:text-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;