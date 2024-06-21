import { createStore, combineReducers } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";

const rootReducer = combineReducers({
  // Add your reducers here
});

export const store = createStore(rootReducer);
