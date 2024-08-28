import {configureStore} from "@reduxjs/toolkit";
import Todoreducer from "./features/todos/todosSlice";

export const store = configureStore({
	reducer:{
		todos: Todoreducer
	}
})