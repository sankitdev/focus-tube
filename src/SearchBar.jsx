import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { SEARCH_AUTOCOMPLETE } from "./constant";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleOnBlur = () => {
    setState(false);
  };
  const handleOnFocus = () => {
    setState(true);
  };

  const getSearchSuggestion = async () => {
    const response = await fetch(SEARCH_AUTOCOMPLETE + searchQuery);
    const data = await response.json();
    setSearchSuggestion(data[1]);
  };
  return (
    <div className="relative w-full">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-1.5 rounded-l-full outline-none border-2 border-gray-200 w-full"
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
        <Link to={"/results?search_query=" + searchQuery} className="ml-2">
          <CiSearch className="text-xl" />
        </Link>
      </div>
      {state && (
        <div className="absolute top-full px-4 py-2 w-full shadow-md bg-white">
          {searchSuggestion.length > 0 &&
            searchSuggestion.map((items, index) => (
              <h1
                key={index}
                className="cursor-pointer hover:bg-slate-100 flex items-center"
              >
                <CiSearch className="mr-2" /> {items}
              </h1>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
