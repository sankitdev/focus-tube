import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSice";
import SearchCache from "./SearchCache";
const store = configureStore({
  reducer: {
    app: menuSlice,
    search: SearchCache,
  },
});

export default store;
