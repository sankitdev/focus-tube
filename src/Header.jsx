import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./store/menuSice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-cols-[auto,1fr,auto,auto] items-center sticky top-0 bg-white px-5 py-2">
        <div className="flex items-center gap-4 text:2xl sm:text-xl">
          <AiOutlineMenu
            className=" cursor-pointer justify-self-start"
            onClick={() => handleToggle()}
          />
          <Link to="/" className="justify-self-right">
            <h1 className="  font-medium select-none">
              <span className="text-orange-500 ">Focus</span>
              <span className="text-black">Tube</span>
            </h1>
          </Link>
        </div>
        <div className="flex justify-self-center w-1/2 ">
          <SearchBar />
        </div>
        <CgProfile className="text-2xl justify-self-end" />
      </div>
    </>
  );
};
export default Header;
