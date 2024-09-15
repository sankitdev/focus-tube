import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./store/menuSice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center h-14 shadow-md px-5 sticky top-0 bg-white">
      <div className="flex items-center gap-5">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => handleToggle()}
        />
        <Link to="/">
          <h1 className="text-2xl font-medium select-none">
            <span className="text-orange-500 ">Focus</span>
            <span className="text-black">Tube</span>
          </h1>
        </Link>
      </div>
      <div className="flex w-2/5">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-1.5 rounded-l-full outline-none border-2 border-gray-200 w-full "
        />
        <button className="bg-white px-4 rounded-r-full border-2 border-gray-200">
          <CiSearch className="text-xl" />
        </button>
      </div>
      <CgProfile className="text-2xl" />
    </div>
  );
};
export default Header;
