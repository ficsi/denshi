import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import AddForm from "./AddForm";
import {deleteTodo, getAllTodos, updateTodo} from "./todosSlice";
import './TodoList.scss';
import './SingleTodo.scss';

function TodosList() {
	const dispatch = useDispatch();
	const todos = useSelector(getAllTodos);

	useEffect(() => {

	}, []);
	const handleDeleteTodo = (e, id) => {
		e.preventDefault();
		dispatch(deleteTodo(id));
	}

	const handleUpdateTodo = (e, id) => {
		e.preventDefault();
		dispatch(dispatch(updateTodo({id, completed: !todos.find(todo => todo.id === id).completed})));
	}

	const renderTodos = todos.map((todo, index) => {
		return (
			<div key={todo.id} className={`animate container ${todo.completed ? 'completed' : ''}`}>
				<span className={'todo-number'}>{index + 1}</span>
				<div className={'todo'} >
					<p>{todo.title}</p>
					<button className={'delete'} disabled={todo.completed}
							onClick={(e) => handleDeleteTodo(e, todo.id)}>delete
					</button>
					<button className={'complete'} onClick={(e) => handleUpdateTodo(e, todo.id)}>done</button>
				</div>
			</div>
		)
	})

	return (
		<>
			<h1>Tasks List</h1>
			<AddForm/>
			{renderTodos}
		</>
	)
}

export default TodosList
