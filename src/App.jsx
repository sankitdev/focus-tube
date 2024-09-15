import Body from "./Body";
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./Header";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="h-full w-full">
      <Provider store={store}>
        <Header />
        <SideBar />
        <Outlet />
      </Provider>
    </div>
  );
};
export default App;
