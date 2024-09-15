import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSice";
const store = configureStore({
  reducer: {
    app: menuSlice,
  },
});

export default store;
