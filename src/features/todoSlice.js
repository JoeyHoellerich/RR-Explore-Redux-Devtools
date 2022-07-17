import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return {items: [...state.items, action.payload]}
        },
        removeTodo: (state, action) => {
            let currentItems = [...state.items]
            let index = action.payload
            currentItems.splice(index, 1)
            return {items: currentItems}
        },
        clearTodo: (state) => {
            return {items: []}
        }
    }
})

export const {addTodo, removeTodo, clearTodo} = todoSlice.actions
export default todoSlice.reducer