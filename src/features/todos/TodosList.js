import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import AddForm from "./AddForm";
import {deleteTodo, getAllTodos, updateTodo} from "./todosSlice";

function TodosList() {
	const dispatch = useDispatch();
	const todos = useSelector(getAllTodos);

	const handleDeleteTodo = (e, id) => {
		e.preventDefault();
		dispatch(deleteTodo(id));
	}

	const handleUpdateTodo = (e, id) => {
		e.preventDefault();
		dispatch(updateTodo(id));

	}

	const renderTodos = todos.map((todo) => {
		return (
			<div className={'todo'} key={todo.id}>
				<p>{todo.title}</p>
				<button className={'delete'} disabled={todo.complate} onClick={(e) => handleDeleteTodo(e, todo.id)}>delete</button>
				<button className={'complete'}  onClick={(e) => handleUpdateTodo(e, todo.id)}>done</button>
			</div>
		)
	})

	return (
		<>
			<h1>TodosList</h1>
			<AddForm/>
			<hr/>
			{renderTodos}
		</>
	)
}

export default TodosList
