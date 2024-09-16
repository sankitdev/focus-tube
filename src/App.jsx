import Body from "./Body";
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./Header";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="h-full w-full relative">
      <Provider store={store}>
        <Header />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};
export default App;
