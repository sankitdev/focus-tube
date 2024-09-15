import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { toggleMenu } from "./store/menuSice";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);
  if (!isMenuOpen) return null;
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  const sideBarList = [
    "Home",
    "Shorts",
    "Subscription",
    "Home",
    "Shorts",
    "Subscription",
    "Home",
    "Shorts",
    "Subscription",
  ];
  return (
    <div className="w-56 text-black bg-white absolute top-0 left-0 z-10 px-5 overflow-y-scroll">
      <div className="flex items-center gap-5 h-16">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => handleToggle()}
        />
        <h1 className="text-2xl font-medium select-none">
          <span className="text-orange-500 ">Focus</span>
          <span className="text-black">Tube</span>
        </h1>
      </div>
      {sideBarList.map((items, index) => (
        <p
          key={index}
          className="text-xl py-1 border-b-2 border-slate-200 hover:bg-slate-600"
        >
          {items}
        </p>
      ))}
    </div>
  );
};
export default SideBar;
