import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "AppSlice",
  initialState: {
    sidePanelOpen: true,
    activeFilter: "All",
    searchResultsCache: {},
  },
  reducers: {
    toggleSidePanelAction: (state) => {
      state.sidePanelOpen = !state.sidePanelOpen;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    setSidePanelToggle: (state, action) => {
      state.sidePanelOpen = action.payload;
    },
    setSearchResultsCache: (state, action) => {
      state.searchResultsCache[action.payload.searchString] =
        action.payload.searchResults;

      // //better way, but not working, check it out.
      // state.searchResultsCache = {
      //   ...action.payload,
      //   ...state.searchResultsCache,
      // };
      // We can use LRU for better perf.. once cache becomes more than 100, remove older onces.
    },
  },
});

export const {
  toggleSidePanelAction,
  setActiveFilter,
  setSidePanelToggle,
  setSearchResultsCache,
} = appSlice.actions;
export default appSlice.reducer;
