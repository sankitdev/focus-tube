import Body from "./Body";
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./Header";
import SideBar from "./Sidebar";
const App = () => {
  return (
    <div className="h-full w-full bg-slate-500 px-10 relative">
      <Provider store={store}>
        <SideBar />
        <Header />
        <Body />
      </Provider>
    </div>
  );
};
export default App;
