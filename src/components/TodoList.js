import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

const TodoList = props => (
	<div className={style.TodoList}>
		<ul>
			{props.todoList.map(todo => <Todo key={todo.id} text={todo.text} remove={() => props.remove(todo.id)}/>)}
		</ul>
	</div>
);

export default TodoList;