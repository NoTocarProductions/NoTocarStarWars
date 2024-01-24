import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import filmsSlice from "./filmsSlice";

const reduxStore = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    films: filmsSlice.reducer,
  },
});

export default reduxStore;
