import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { pokemonApi } from "./api";

const reducers = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer
});

const middlewares = [pokemonApi.middleware];

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares)
});
