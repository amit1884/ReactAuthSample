import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "./RootReducer";

const store = configureStore({
  reducer: rootreducer,
});

export default store;
