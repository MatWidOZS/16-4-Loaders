import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => (
	<form className={style.form} onSubmit={props.add}>
		<fieldset className={style.fieldset}>
			<legend>Add your plans to list</legend>
			<input 
				type="text"
				value={props.value}
				onChange={props.handleChange}
				placeholder="Enter what to do" />
		</fieldset>
	</form>
);

export default TodoForm;