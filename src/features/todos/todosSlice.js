import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	todos: [],
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			const { id, completed } = action.payload;
			const todoIndex = state.todos.findIndex((todo) => todo.id === id);
			if (todoIndex !== -1) {
				state.todos[todoIndex].completed = completed;
			}
		},
	},
});

export const getAllTodos = (state) => state.todos.todos;
export const {addTodo, deleteTodo, updateTodo} = todosSlice.actions;
export default todosSlice.reducer;