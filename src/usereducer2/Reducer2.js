import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
	ADDTODO: 'todo',
	TOGGLE: 'toggletodo',
	DELETE: 'delete',
};

function reducer(todos, action) {
	switch (action.type) {
		case ACTIONS.ADDTODO:
			return [...todos, newTodo(action.payload.name)];
		case ACTIONS.TOGGLE:
			return todos.map(todo => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				} else return todo;
			});
		case ACTIONS.DELETE:
			return todos.filter(todo => todo.id !== action.payload.id);
		default:
			return todos;
	}
}

function newTodo(name) {
	return { id: Date.now(), name: name, complete: false };
}

export const Reducer2 = () => {
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState('');

	function submitHandler(e) {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
		setName('');
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input type='text' value={name} onChange={e => setName(e.target.value)} />
			</form>
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} dispatch={dispatch} />
			))}
		</div>
	);
};
