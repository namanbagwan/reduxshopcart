import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./action/reducer";

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware, devtools, and other options here
});

export default store;
