import React from 'react';
import { ACTIONS } from './Reducer2';

export default function Todo({ todo, dispatch }) {
	return (
		<div>
			<span style={{ color: todo.complete ? 'green' : 'red', textDecoration: todo.complete ? 'line-through' : 'none' }}>
				{todo.name}
			</span>
			<button onClick={() => dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })}>Toggle</button>
			<button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })}>Delete</button>
		</div>
	);
}
