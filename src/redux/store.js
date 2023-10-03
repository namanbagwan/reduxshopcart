// import { createStore } from "redux";
// import rootReducers from "./action/reducer";

// const store = createStore(rootReducers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./action/reducer";

const store = configureStore({
  reducer: rootReducers,
  // Optionally configure middleware and other options here
});

export default store;
