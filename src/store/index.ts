import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coreApi } from "../services/core.api";

export const store = configureStore({
  reducer: {
    [coreApi.reducerPath]: coreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coreApi.middleware),
});

setupListeners(store.dispatch);
