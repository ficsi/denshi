import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {addTodo} from "./todosSlice";

function AddForm() {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState({});

	const handleTitleChange = (e) => {
		setTodo(e.target.value);
	}
	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todo.trim()) { // Check if todo is not just whitespace
			dispatch(addTodo({ id: nanoid(), title: todo, completed: false }));
			setTodo('');
		}
	};

	return (
		<form action="" className={'add-todo-form'}>
			<input onChange={(e) => handleTitleChange(e)} value={todo.title} type="text"/>
			<button onClick={(e) => handleAddTodo(e)}>Add Task</button>
		</form>
	)
}

export default AddForm
