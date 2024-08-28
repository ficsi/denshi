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
			return state.todos.map((todo) => {
				if (todo.id === action.payload) {
					return { ...todo, complated: !todo.completed };
				}
				return todo;
			});
		},
	},
});

export const getAllTodos = (state) => state.todos.todos;
export const {addTodo, deleteTodo, updateTodo} = todosSlice.actions;
export default todosSlice.reducer;