import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isOpen);
  if (!isMenuOpen) return null;
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
    <div className="w-44 bg-slate-700 text-white absolute top-0 left-0 h-full">
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
