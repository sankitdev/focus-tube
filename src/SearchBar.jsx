import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";
import { SEARCH_AUTOCOMPLETE } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "./store/SearchCache";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [dropdownVisible, setdropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setdropdownVisible(false);
  }, [location]);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery === "") {
      setSearchSuggestion([]);
      return;
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleOnBlur = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setdropdownVisible(false);
      setSearchQuery("");
    }
  };
  const handleOnFocus = () => {
    if (searchSuggestion.length > 0) {
      setdropdownVisible(true);
    }
  };

  const getSearchSuggestion = async () => {
    try {
      console.log(searchSuggestion);
      const response = await fetch(SEARCH_AUTOCOMPLETE + searchQuery);
      const data = await response.json();
      setSearchSuggestion(data[1] || []);
      dispatch(
        cacheResult({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      console.error("Error in getSearchSuggestion: ", error);
    }
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
      {searchSuggestion.length > 0 && (
        <div
          ref={dropdownRef}
          onClick={() => setdropdownVisible(false)}
          className="absolute top-full px-4 py-2 w-full shadow-md bg-white"
        >
          {searchSuggestion.map((items) => (
            <Link to={"/results?search_query=" + items} key={items}>
              <h1
                className="cursor-pointer hover:bg-slate-100 flex items-center"
                onClick={() => {
                  setSearchQuery(items);
                }}
              >
                <CiSearch className="mr-2" /> {items}
              </h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
