import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./store/menuSice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center gap-5">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => handleToggle()}
        />
        <h1 className="text-2xl font-medium select-none">
          <span className="text-orange-500 ">Focus</span>
          <span className="text-black">Tube</span>
        </h1>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-l-md outline-none"
        />
        <button className="bg-white px-2">
          <CiSearch className="text-xl" />
        </button>
      </div>
      <CgProfile className="text-2xl" />
    </div>
  );
};
export default Header;
