import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

const store=configureStore({
    reducer: {
        todo: todoReducer,  // Here, "todo" is the state name, and todoReducer handles its logic
    },
});

export default store;

