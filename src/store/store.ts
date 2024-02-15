import { configureStore } from "@reduxjs/toolkit";
import converterReducer from "./reducer/converterReducer";

const store = configureStore({
  reducer: converterReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
