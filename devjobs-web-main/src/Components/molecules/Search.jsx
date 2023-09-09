import React, { useEffect, useState } from 'react'
import searchIcon from '/icons/icon-search.svg';
import locationIcon from '/icons/icon-location.svg';

const Search = (props) => {
    const {setQuery} = props;
    const [search, setSearch] = useState('');
    const handleSubmit = () =>{
      setQuery(search);
    }

  return (
    <div className="bg-slate-50 px-2 rounded-lg w-full grid grid-cols-3">
      <div className="flex items-center border-r-2 border-slate-500 px-2 py-4">
        <img className="pr-4 h-6" alt="search icon" src={searchIcon} />
        <input
          className="w-full bg-slate-50 focus:ring-2 ring-indigo-600 outline-none"
          type="text"
          name="search"
          placeholder="Filter by title, companies..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center border-r-2 border-slate-500 px-2 py-4">
        <img className="px-2" alt="location icon" src={locationIcon} />
        <input
          className="w-full bg-slate-50 focus:ring-2 ring-indigo-600 outline-none"
          type="text"
          name="location"
          placeholder="Filter by location..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-between px-2 py-4">
        <div className="ml-8 flex items-center">
          <input
            className="w-5 h-5"
            id="contractType"
            type="checkbox"
            name="contract"
            value = "full time"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label className="ml-2 font-semibold">
            Full Time Only
          </label>
        </div>
        <button
          className="px-4 py-2 bg-indigo-600 rounded-lg text-slate-50 font-semibold"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search