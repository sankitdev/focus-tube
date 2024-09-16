import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-4 py-1.5 rounded-l-full outline-none border-2 border-gray-200 w-full "
      />
      <button className="bg-white px-4 rounded-r-full border-2 border-gray-200">
        <Link to={"/results?search_query=" + value}>
          <CiSearch className="text-xl" />
        </Link>
      </button>
    </>
  );
};

export default SearchBar;
