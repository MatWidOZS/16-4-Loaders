import React from 'react';
import style from './Todo.css';

const Todo = props => (
	<li>
		<button className={style.btn} onClick={() => props.remove(props.id)}>
			x
		</button>
		{props.text}
	</li>
);

export default Todo;