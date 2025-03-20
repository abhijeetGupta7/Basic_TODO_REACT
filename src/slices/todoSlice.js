import { createSlice } from "@reduxjs/toolkit";

// Creating the slice
const todoSlice = createSlice({
    name: "todo", // This is the name of the slice (state name)
    initialState: [], // Initial state (empty array for todos)
    reducers: {
        // Action method to add a todo
        add_todo: (state, action) => {
            console.log(action);
            state.push({ id: Date.now(), todoText: action.payload.todoText, isFinished: false });
        },

        // Action method to toggle the "finished" state of a todo
        change_finished: (state, action) => {
            console.log(action)
            const todo = state.find(item => item.id === action.payload.todo.id);
            if (todo) {
                todo.isFinished = action.payload.finished;
            }
        },

        // Action method to delete a todo
        delete_todo: (state, action) => {
            return state.filter(item => item.id !== action.payload.todo.id);
        },

        // Action method to edit a todo
        edit_todo: (state, action) => {
            const todo = state.find(item => item.id === action.payload.todo.id);
            if (todo) {
                todo.todoText = action.payload.todoText;
            }
        }
    }
});

// Exporting the actions
export const { add_todo, change_finished, delete_todo, edit_todo } = todoSlice.actions;

// Exporting the reducer
export default todoSlice.reducer;
