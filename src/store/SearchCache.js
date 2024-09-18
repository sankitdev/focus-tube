import { createSlice } from "@reduxjs/toolkit";

const SearchCache = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});
export const { cacheResult } = SearchCache.actions;
export default SearchCache.reducer;
