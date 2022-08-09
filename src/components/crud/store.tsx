import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
export const store =configureStore({
    reducer:{
        post:postReducer,
    }
})
export type Dispatched = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
